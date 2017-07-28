import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Dimensions, ScrollView } from 'react-native';
import Hr from 'react-native-hr';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import TripOverview from './../../components/tripOverview/tripOverview.js';
import Drawers from './../../components/SideMenu/Drawer.js';


let self;
let window = Dimensions.get("window");



export default class PickUpHome extends Component {
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
    const { navigate, goBack, state } = this.props.navigation;
    const { tripData } = this.state;
    return (
      <Drawers isOpen={this.state.isOpen} navigate={navigate}>
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
          <View style={[{flexDirection :'row',height:50,}]}>
              <TouchableHighlight onPress={() => navigate('SearchPickUp')} underlayColor={common.tuchableUnderlayWhiteColor} style={[{flex:0.5},styles.filterBoxHome]}>
                <View style={{flexDirection:'row'}}>
                  <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal',marginTop :11,marginLeft :13}]}>Search by delivery location</Text>
                      <Image
                        style={{marginTop:11,position:'absolute',right:10}}
                        source={images.Search_Glass}
                      />

                </View>
              </TouchableHighlight>
          </View>
          <View>
            <Text style={[commonStyle.fontSize_20,{fontWeight : 'normal',marginTop :11,marginLeft :13,color:common.whiteColor}]}>Nearby loads</Text>
          </View>
      </View>

          <View style={{height : window.height - 190,marginTop :0}}>
          <ScrollView contentContainerStyle={[{paddingBottom : 15,paddingTop :5}]}>
            {
              tripData.map((trip, key) => {
                return(
                  <TripOverview key={key} trip = {trip} onPress={() => navigate('TripDetails')}/>
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
