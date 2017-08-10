import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,ScrollView,Dimensions} from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

let self;
let window = Dimensions.get("window");
export default class TrailerType extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      //searchText:''
    }

  }


  render(){
    const { navigate,goBack } = this.props.navigation;
    return (

      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <TouchableHighlight onPress={() => goBack() } underlayColor="transparent" style={[{width : 60,height : 70,marginTop :40},commonStyle.contentCenter]}>
          <Image
            style={{height:15,width:16}}
            source={images.Close_White}
          />
        </TouchableHighlight>
        <View style={[commonStyle.smallHeaderBar]}>
          <Text style={[commonStyle.fontSize_12,styles.fontMullerRegular,{color:common.whiteColor,textAlign:'right',textDecorationLine:'underline',marginRight:15}]}>Clear all</Text>
        </View>
      </View>
      <View style={{backgroundColor:common.blackColor}}>
        <View style={[styles.textInputParentSearch,{marginTop:5,marginBottom:10}]}>
            <TouchableHighlight underlayColor="transparent"  style={{}}>
              <Text style={[commonStyle.fontSize_20,styles.fontMullerRegular,{color:common.whiteColor,lineHeight:50,paddingLeft:35}]}>Select a trailer type</Text>
            </TouchableHighlight>
          </View>
      </View>

      <View style={{height:window.height-220}}>
        <ScrollView contentContainerStyle={[commonStyle.scrollContainer]}>
        <View style={[commonStyle.subContainer]}>

          <View style={{marginTop:25}}>
            <TouchableHighlight style={{marginBottom:11}}  >
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}  >
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{marginBottom:10}}>
              <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Trailer Type</Text>
            </TouchableHighlight>

            </View>
        </View>
        </ScrollView>

      </View>
      <View style={{borderTopWidth:1,borderTopColor:common.grayColor,bottom:0}}>

      </View>
      <TouchableHighlight onPress={() => navigate('PickUpResult')}   underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.subContainer,styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,bottom:10}]}>
        <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>FIND LOADS</Text>
      </TouchableHighlight>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
