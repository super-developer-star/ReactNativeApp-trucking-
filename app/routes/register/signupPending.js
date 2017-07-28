import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Dimensions } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get("window");

export default class SignupPending extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);
    self= this;
    this.state = {

    }

  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight90,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <View style={{flex:0.5}}>
        <TouchableHighlight onPress={() => {}} underlayColor="transparent" style={[{width : 60,height : 50,marginTop :32},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Hamburger}
          />
        </TouchableHighlight>
        </View>
        <View style={[{flex:1, marginTop : 35,marginRight : 24},commonStyle.contentRight]}>
          <View style={[styles.oval,commonStyle.contentCenter]}>
            <Text style={[{backgroundColor : 'transparent'},commonStyle.fontSize_14,{fontWeight : '600', lineHeight : 17,color : common.greenColor}]}>3</Text>
          </View>
        </View>
      </View>
        <View style={commonStyle.subContainer}>

        <View style={[commonStyle.contentCenter,{height : window.height - 80}]}>
          <Image
          style={{}}
          source={images.Axle_NoTires}
          />
          <View style={{marginTop : 15,marginHorizontal :10}}>
            <Text style={[commonStyle.fontSize_20,{textAlign : 'center'}]}>Thank you for signing up with Axle. Our support team will contact you via email within 48 hours.</Text>
          </View>
        </View>

          <TouchableHighlight onPress={() => navigate('PickUpResult')} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,position : 'absolute', bottom : 20}]}>
            <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>REFRESH STATUS</Text>
          </TouchableHighlight>

        </View>


      </View>
    )
  }
  //************************************** Render end*****************************//
};
