import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  CameraRoll, 
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Scanner from 'react-native-document-scanner';
// import { Expo } from 'expo';
import Header from './../../layouts/common/Header/Header.js';
import images from './../../config/images';
import { getSize} from './../../layouts/common/RatioCalculator/ratio';
let window = Dimensions.get("window");
import styles from './styles';
// import DocScanned from './../DocScanned/DocScanned';
import base64 from 'base-64';
import RNFetchBlob from 'react-native-fetch-blob';
import FileSystem from 'react-native-filesystem';

export default class DocScan extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: null,
      cameraEnabled: false
    }
  }

  enablingCamera = () => {
    this.setState({
      cameraEnabled: true,
      image: null
    });
  }

  saveAsPdf = (base64AsPdf) => {
    const source = base64AsPdf;
    let contentType = "application/pdf;base64";
    let folderPath = "/Users/mobiledev/Documents/works/react-mobile/";
    let fileName = "hello.pdf";
    
    this.savebase64AsPDF(folderPath, fileName,source, contentType);
  }

  b64toBlob = (b64Data, contentType, sliceSize) => {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    // const byteCharacters = base64.decode(b64Data);
    // const byteArrays = [];

    // for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    //     const slice = byteCharacters.slice(offset, offset + sliceSize);

    //     const byteNumbers = new Array(slice.length);
    //     for (let i = 0; i < slice.length; i++) {
    //         byteNumbers[i] = slice.charCodeAt(i);
    //     }

    //     const byteArray = new Uint8Array(byteNumbers);

    //     byteArrays.push(byteArray);
    // }

  const Blob = RNFetchBlob.polyfill.Blob;
  const createdBlob = new Promise((resolve, reject) => {
    Blob.build(b64Data, {type: contentType})
      .then((blob) => {
        resolve(blob);
      })
  })
  
  return createdBlob;
}

savebase64AsPDF = (folderPath, fileName, source, contentType) => {
  const DataBlob = this.b64toBlob(source,contentType);        
  
  this.writeToFile(folderPath, fileName, DataBlob);
}

writeToFile = (folderPath, fileName, fileContents) => {
  const path = folderPath + fileName;
  console.log('fileContents', fileContents);
  FileSystem.writeToFile(path, fileContents);
  console.log('file is written');
}

  render() {
    const { navigate, goBack } = this.props.navigation;
    console.log('image', this.state.image);
    return (
      <View style={styles.Container}>
        <Header title={"Scan POD"} goBack={goBack} image={images.Close_White}/>
        { this.state.image ?
        <View style={styles.Content}>          
          <View style={styles.DocContainer}>
            <Image style={styles.CapturedImage} source={{uri: `data:application/pdf;base64,${this.state.image}`}} resizeMode="contain" />
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableHighlight style={styles.FirstButtonContainer} onPress={() => this.enablingCamera()}>
              <Text  style={styles.FirstButtonText}>RETAKE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.SecondButtonContainer} onPress={() => this.saveAsPdf(this.state.image)} >
              <Text style={styles.SecondButtonText}>SAVE</Text>
            </TouchableHighlight>
          </View>
        </View> :
        <View style={styles.Content}>            
          <View style={styles.CameraWrapper}>
            { this.state.cameraEnabled &&
            <Scanner
              onPictureTaken={data => this.setState({ image: data.image })}
              overlayColor="rgba(255,130,0, 0.7)"
              enableTorch={false}
              brightness={0.2}
              saturation={0}
              quality={1}
              contrast={1.2}
              onRectangleDetect={({ stableCounter, lastDetectionType }) => this.setState({ stableCounter, lastDetectionType })}
              detectionCountBeforeCapture={10}
              detectionRefreshRateInMS={50}
              style={styles.scanner}
            />}
          </View>
          { !this.state.cameraEnabled &&             
          <TouchableHighlight onPress={() => this.enablingCamera()}>
            <View style={styles.CameraTake}>
              <Image source={images.Camera} size={styles.Image}/>
            </View>
          </TouchableHighlight>
          }
        </View>
        }
      </View>
    )
  }
}

