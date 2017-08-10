import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';

/* Actions */
import { setShipmentSearchQuery } from './../../actions/shipments';

let self;

class SearchPickUp extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      searchText:''
    };
    this.setPickupLocation = this.setPickupLocation.bind(this);

  }
    setPickupLocation(location){
      console.log('searchText: ', this.state.searchText);
      this.props.actions.setShipmentSearchQuery(location);
      this.props.navigation.navigate('SearchDropOff');
    }

  render(){
    const { navigate,goBack } = this.props.navigation;
    return (

      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 70,marginTop :40},commonStyle.contentCenter]}>
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
        <View style={[styles.textInputParentSearch]}>
          <TextInput
            underlineColorAndroid = "transparent"
            value={this.state.searchText}
            placeholder = "Enter pickup location"
            autoFocus = {true}
            placeholderTextColor={common.darkGrayColor}
            style={[styles.txtInutStyleSearch,styles.fontMullerRegular,{fontSize:20}]}
            />
              <Image
                style={{marginTop:5}}
                source={images.Search_Glass}
              />
            </View>
      </View>
      <View style={{height:70,borderBottomWidth:1,borderBottomColor:common.grayColor}}>
          {/*<TouchableHighlight underlayColor="transparent" onPress={}  style={{marginTop:10,marginBottom:10}}>
            <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,paddingLeft:35}]}>My Location</Text>
          </TouchableHighlight>*/}
      </View>

      <View style={commonStyle.subContainer}>
        <View style={{marginTop:25}}>
          <TouchableHighlight style={{marginBottom:11}} underlayColor="transparent" onPress={this.setPickupLocation(this.state.searchText)} >
            <Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>Select Above Location</Text>
          </TouchableHighlight>
          {/*<TouchableHighlight style={{marginBottom:10}} underlayColor="transparent" onPress={() => navigate('SearchDropOff')} >*/}
            {/*<Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>City name,State Initial</Text>*/}
          {/*</TouchableHighlight>*/}
          {/*<TouchableHighlight style={{marginBottom:10}} underlayColor="transparent" onPress={() => navigate('SearchDropOff')} >*/}
            {/*<Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>City name,State Initial</Text>*/}
          {/*</TouchableHighlight>*/}
          {/*<TouchableHighlight style={{marginBottom:10}} underlayColor="transparent" onPress={() => navigate('SearchDropOff')} >*/}
            {/*<Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>City name,State Initial</Text>*/}
          {/*</TouchableHighlight>*/}
          {/*<TouchableHighlight style={{marginBottom:10}} underlayColor="transparent" onPress={() => navigate('SearchDropOff')} >*/}
            {/*<Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>City name,State Initial</Text>*/}
          {/*</TouchableHighlight>*/}
          {/*<TouchableHighlight style={{marginBottom:10}} underlayColor="transparent" onPress={() => navigate('SearchDropOff')} >*/}
            {/*<Text style={[commonStyle.fontSize_16,styles.fontMullerRegular,{lineHeight:50,color:common.grayTextColor,paddingLeft:15}]}>City name,State Initial</Text>*/}
          {/*</TouchableHighlight>*/}

        </View>
      </View>


      </View>
    )
  }
  //************************************** Render end*****************************//
};

/* Map state to props */
function mapStateToProps(state){
    return {
        shipments: state.shipments,
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setShipmentSearchQuery
        }, dispatch)
    };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(SearchPickUp)
