import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  CameraRoll
} from 'react-native';
import { Expo } from 'expo';
import Header from './../../layouts/common/Header/Header.js';
import images from './../../config/images';
import { getSize} from './../../layouts/common/RatioCalculator/ratio';
let window = Dimensions.get("window");
import styles from './styles';


export default class DocScan extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Header title={"Scan POD"} goBack={goBack} image={images.Close_White}/>
        <View style={styles.Content}>
            <View style={styles.CameraWrapper}>
            </View>
            <View style={styles.CameraTake}>
              <Image source={images.Camera} size={styles.Image}/>
            </View>
        </View>
      </View>
    )
  }
}
