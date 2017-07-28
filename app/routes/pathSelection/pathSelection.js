import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;

export default class PathSelection extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }

  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
        <View style={[commonStyle.subContainer,commonStyle.contentCenter]}>
            <View style={commonStyle.contentCenter}>
                <Image
                style={{}}
                source={images.splash_logo}
              />
            </View>

              <TouchableHighlight onPress={() => navigate('Login')} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,bottom:107}]}>
                <Text style={[commonStyle.fontSize_14,{fontFamily:'ProximaNova-Bold'}]}>LOGIN</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => navigate('SignUp')} underlayColor={common.tuchableUnderlayWhiteColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.whiteColor,bottom:37,borderColor:common.blackColor,borderWidth:1}]}>
                <Text style={[commonStyle.fontSize_14,{color:common.blackColor,fontFamily:'ProximaNova-Bold'}]}>SIGN UP</Text>
              </TouchableHighlight>
            </View>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
