import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';

import Header from './../../layouts/common/Header/Header.js';
import images from './../../config/images';
import { getSize} from './../../layouts/common/RatioCalculator/ratio';
let window = Dimensions.get("window");
import styles from './styles';

export default class DocScanned extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Content}>
          <View style={styles.DocContainer}>
            <Image style={{flex:1, width:300, height: 250}} source={{uri: `data:image/jpeg;base64,${this.props.image}`}} resizeMode="contain" />
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableHighlight style={styles.FirstButtonContainer} onPress={() => this.props.camera}>
              <Text  style={styles.FirstButtonText}>RETAKE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.SecondButtonContainer} >
              <Text style={styles.SecondButtonText}>SAVE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
};
