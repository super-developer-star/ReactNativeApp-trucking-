import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
  Modal,
  Picker,
  TouchableHighlight
} from 'react-native';

import images from './../../config/images';
// import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'

import { getSize} from './../../layouts/common/RatioCalculator/ratio';
let window = Dimensions.get("window");

export default class DocType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: 'Document Type',
      modalVisible: false
    }
  }

  openModal = (visible) => {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={s.Container}>
        <StatusBar
             backgroundColor="white"
             barStyle="light-content"
           />
        <View style={s.Header}>
          <View style={s.HeaderContent}>
            <View style={s.HeaderTextContainer}>
              <Text style={s.HeaderText}>Your trip is Complete</Text>
            </View>
            <View style={s.Icon}>
              <EvilIcon name="check" color="#A5DB03" size={getSize(28)}/>
            </View>
          </View>
        </View>
        <View style={s.Content}>
          <View style={s.Location}>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={s.LeftIcon}>
                <View style={[s.dot]}/>
                  <View style={s.dottedLine}>
                    <Image
                      source={images.dotted_line}
                      style={s.dottedLineImage}
                    />
                    <Image
                      source={images.dotted_line}
                      style={s.dottedLineImage}
                    />
                    <Image
                      source={images.dotted_line}
                      style={s.dottedLineImage}
                    />
                  </View>
                  {/* <FontAwesome name="map-marker"  size={18} color="#A5DB03" style={{marginTop: getSize(6)}}/> */}
              </View>
              <View style={{ flex:5}}>
                <View style={{paddingTop: getSize(24)}}>
                  <Text style={s.MiddleHeadingText}>Los Angeles, California</Text>
                  <Text style={s.SubTitleText}>Aug 1, 2017  12:00 am - 4:00 am (pt) </Text>
                  <Text style={s.SubTitleText}>(123) 456 - 789</Text>
                </View>
                <View style={{paddingTop: getSize(24)}}>
                  <Text style={s.MiddleHeadingText}>Los Vegas,  Nevada</Text>
                  <Text style={s.SubTitleText}>Aug 1, 2017  12:00 am - 4:00 am (pt) </Text>
                  <Text style={s.SubTitleText}>(123) 456 - 789</Text>
                </View>
              </View>
              <View style={{alignItems: 'flex-end',flex:1}}>
                <Image source={images.Arrow_Right} style={{marginTop: getSize(22)}}/>
              </View>
            </View>
          </View>
          <View style={s.Hr}/>
          <View style={s.UploadSection}>
              <Text style={{fontSize: getSize(12),fontFamily: 'ProximaNova-Bold', fontWeight: 'bold'}}>UPLOAD NECESSARY DOCUMENTS</Text>
          <TouchableHighlight onPress={() => navigate('DocScan')}>
            <View style={{height:getSize(44), paddingTop: getSize(10)}}>
                <EvilIcon name="camera"  color="#D1D3D4" size={30} style={{position: 'absolute', marginLeft: getSize(290), marginTop:getSize(20),zIndex:1, width:getSize(40)}}/>
               <Text style={{paddingLeft:getSize(14),borderWidth: 1, height:getSize(44), borderColor: '#D1D3D4', color:'#B8BBC4', paddingVertical:12, fontSize:18}}>Scan Proof Of Delivery (POD)*</Text>       
            </View>
          </TouchableHighlight>
          </View>
          <View style={s.Hr}/>
          <TouchableHighlight onPress={() => this.openModal(true)} underlayColor='transparent' style={{margin:getSize(20), height:getSize(44), paddingTop: getSize(5)}}>                    
            <Text style={{paddingLeft:getSize(14),borderWidth: 1, height:getSize(44), borderColor: '#D1D3D4', color:'#B8BBC4', paddingVertical:12, fontSize:18}}>Select a document type to scan</Text>                      
          </TouchableHighlight>   
        </View>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {console.log('closed')}}
          >
          <View  style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}} >
            <View  style={s.ModalContainer}>
              <View style={{paddingTop: getSize(10), marginRight: getSize(10)}}>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                  <TouchableHighlight style={s.ButtonWrapper}>
                    <Text style={s.ButtonText}>SCAN</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={{paddingTop:getSize(20)}}>
                <Picker
                  selectedValue={this.state.doc}
                  onValueChange={(doc) => this.setState({doc})}>
                  <Picker.Item label="Document Type" value="Document Type" />
                  <Picker.Item label="Document Type 2" value="Document Type 2" />
                </Picker>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const s = StyleSheet.create({
  Container: {
    flex:1
  },
  Header: {
    height: getSize(80),
    backgroundColor: '#000000',
  },
  HeaderContent: {
    flexDirection: 'row',
    marginHorizontal: getSize(20)
  },
  HeaderTextContainer: {
    marginTop: getSize(40),
    flex:1,
  },
  HeaderText: {
    fontSize: getSize(16),
    color: '#A5DB03'
  },
  Icon: {
    marginTop: getSize(40),
    flex:1,
    alignItems: 'flex-end'
  },
  TopIcon: {
    width: getSize(20),
    height: getSize(20)
  },
  Content: {
    flex:1
  },
  Location: {
    height: getSize(210),
    marginHorizontal: 20
  },
  dot: {
    height: getSize(12),
    width: getSize(12),
    borderWidth: getSize(2),
    borderColor: '#A5DB03',
    borderRadius: getSize(12/2),
    marginTop: getSize(6),
    marginBottom: getSize(6)
  },
  dottedLineImage: {
    marginTop: getSize(2),
    marginBottom: getSize(2)
  },
  LeftIcon: {
    flex:1,
    alignItems:'center',
    paddingLeft: getSize(10),
    paddingTop: getSize(24)
  },
  MiddleHeadingText: {
    height: getSize(24),
    color: "#000000",
    fontFamily: "ProximaNova-Regular",
    fontSize: getSize(18),
    lineHeight: getSize(20)
  },
  SubTitleText: {
    height: getSize(24),
    color: '#58595B',
    fontFamily: "ProximaNova-Regular",
    fontSize: getSize(14),
    lineHeight: getSize(20)
  },
  UploadSection: {
    height: getSize(70),
    margin: getSize(20),
  },
  Hr: {
    height: 1,
    width: window.width,
    backgroundColor: '#D1D3D4',
  },
  Hr1: {
    height: 2,
    width: window.width,
    backgroundColor: '#D1D3D4',
  },
  ModalContainer: {
    height:getSize(230),
    backgroundColor: '#FFFFFF',
    bottom: 0,
    position: 'absolute',
    width:window.width
  },
  ButtonWrapper: {
    width: getSize(85),
    height: getSize(40),
    backgroundColor: '#A5DB03',
    borderRadius: getSize(4),
    borderWidth: getSize(2),
    borderColor: '#A5DB03'
  },
  ButtonText: {
    textAlign: 'center',
    marginVertical: getSize(9),
    color: '#FFFFFF',
    fontSize:getSize(14),
    fontWeight: 'bold',
    lineHeight: getSize(20)
  }
})
