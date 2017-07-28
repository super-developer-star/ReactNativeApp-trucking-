import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import TripOverview from './../../components/tripOverview/tripOverview.js';
import Drawers from './../../components/SideMenu/Drawer.js';


let self;
let window = Dimensions.get("window");

export default class PickUpResult extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);
    self= this;
    let tripData = [{
      source : 'Los Angeles, California',
      startDate : 'Aug 1, 2017  •  12:00 am - 4:00 am (pt)',
      destination : 'Las Vegas, Nevada',
      endDate : 'Aug 2, 2017  •  7:00 pm - 9:00 pm (pt)',
      deadheadKey : 'DEADHEAD',
      deadheadValue : '20mi',
      priceKey : 'PRICE',
      priceValue : '$2000',
      distanceKey : 'DISTANCE',
      distanceValue : '600mi'
    },{
      source : 'Los Angeles, California',
      startDate : 'Aug 1, 2017  •  12:00 am - 4:00 am (pt)',
      destination : 'Las Vegas, Nevada',
      endDate : 'Aug 2, 2017  •  7:00 pm - 9:00 pm (pt)',
      deadheadKey : 'DEADHEAD',
      deadheadValue : '20mi',
      priceKey : 'PRICE',
      priceValue : '$2000',
      distanceKey : 'DISTANCE',
      distanceValue : '600mi'
    }]
    this.state = {
      tripData : tripData,
      isOpen: false
    }

  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    const { tripData } = this.state;
    return (
      <Drawers navigate={navigate} isOpen={this.state.isOpen}>
        <View style={[commonStyle.container,{backgroundColor : common.blackColor}]}>
        <View style={[commonStyle.headerBarHeight,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
          <View style={{flex:0.5,flexDirection : 'row'}}>
          <TouchableHighlight onPress={() => {this.setState({isOpen: true})}} underlayColor="transparent" style={[{width : 60,height : 50,marginTop :22},commonStyle.contentCenter]}>
            <Image
              style={{width : 21, height : 18}}
              source={images.Hamburger}
            />
          </TouchableHighlight>
            <Text style={[commonStyle.fontSize_20,{color : common.whiteColor,fontWeight :'500',lineHeight:20,marginTop :39}]}>Results</Text>
          </View>
          <View style={[{flex:1, marginTop : 24,marginRight : 24,flexDirection : 'row'},commonStyle.contentRight]}>
          <Text style={[commonStyle.fontSize_20,{color : common.greenColor,fontWeight :'500',lineHeight:20,marginRight: 15}]}>Up-to-date</Text>
            <Image
              style={{width : 19, height : 19}}
              source={images.Circle_Check}
            />
          </View>
        </View>

        <View style={{marginHorizontal : 10}}>
        <View>
          <View style={[{flexDirection :'row',height: 50,}]}>
              <TouchableHighlight onPress={() => navigate('SearchPickUp')} underlayColor={common.tuchableUnderlayWhiteColor} style={[{flex:0.5,marginRight : 10},styles.filterBox]}>
              <View>
                <Text style={[commonStyle.fontSize_9,{fontWeight : 'bold',marginTop :11,marginLeft :14}]}>PICKUP LOCATIONwwww</Text>
                <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal',marginTop :1,marginLeft :14}]}>San Francisco, Cal.</Text>
              </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigate('SearchDropOff')} underlayColor={common.tuchableUnderlayWhiteColor} style={[{flex:0.5},styles.filterBox]}>
              <View>
                <Text style={[commonStyle.fontSize_9,{fontWeight : 'bold',marginTop :11,marginLeft :14}]}>DROP-OFF LOCATION</Text>
                <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal',marginTop :1,marginLeft :14}]}>Anywhere</Text>
              </View>
              </TouchableHighlight>
          </View>

          <TouchableHighlight onPress={() => navigate('PickUpDate')} underlayColor={common.tuchableUnderlayWhiteColor} style={[styles.filterBox,{marginTop : 10}]}>
          <View>
            <Text style={[commonStyle.fontSize_9,{fontWeight : 'bold',marginTop :11,marginLeft :14}]}>PICKUP DATE</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal',marginTop :1,marginLeft :14}]}>Aug 1</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('TrailerType')} underlayColor={common.tuchableUnderlayWhiteColor} style={[styles.filterBox, {marginTop : 10}]}>
          <View>
            <Text style={[commonStyle.fontSize_9,{fontWeight : 'bold',marginTop :11,marginLeft :14}]}>TRAILER TYPE</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal',marginTop :1,marginLeft :14}]}>Reefer</Text>
          </View>
          </TouchableHighlight>
          </View>



          <View style={{height : window.height - 250,marginTop : 0}}>
          <ScrollView contentContainerStyle={[{paddingBottom : 15,paddingTop : 15}]}>
            {
              tripData.map((trip, key) => {
                return(
                  <TripOverview trip = {trip} onPress={() => navigate('TripDetails')} key={key}/>
                )


              })
            }
          </ScrollView>
          </View>
        </View>
        </View>
      </Drawers>
    )
  }
  //************************************** Render end*****************************//
};
