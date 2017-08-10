import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';
import MapContainer from './../../layouts/common/Map/Map';
import ProgressBar from './../../layouts/common/ProgressBar/ProgressBar';
import ToAndFrom from './../../layouts/common/ToAndFrom/ToAndFrom';

import styles from './styles';
import commonStyle from './../../config/commonStyle.js';
import images from './../../config/images.js';

class PickUpLocation extends Component {
  constructor(props){
    super(props);

    this.state = {
        PickUpLocation : {
          latitude: this.props.shipments.selectedShipment.pickuplocationlat,
          longitude: this.props.shipments.selectedShipment.pickuplocationlong,
        }
     }
  }

  render(){
    const { navigate,goBack } = this.props.navigation;
    const { PickUpLocation } = this.state;
    console.log('PickUpLocation', PickUpLocation);
  
    return (
      <View style={commonStyle.container}>
          <View style={{height: '25%'}}>
            <LocationBlock
              title="Pickup Location"
              place="Warehouse"
              street="1234 John Street"
              location="Los Angeles, California 90001" />
            </View>
          <TouchableHighlight onPress={() => navigate('DropOffLocation')} >
            <View style={{height:250}}>
              <MapContainer location={PickUpLocation} />
            </View>
          </TouchableHighlight>
          <View style={{height:50}}>
          <ProgressBar title="Pickup in progress" progressValue={93}/>
          </View>
          <View style={{height: '40%'}}>
          <TouchableHighlight onPress={() => navigate('FullInfo')} >
            <View>
            <ToAndFrom arrowType={images.arrow_up}/>
            </View>
          </TouchableHighlight>
          </View>
      </View>
    )
  }
};

/* Map state to props */
function mapStateToProps(state){
    return {
        shipments: state.shipments,
    }
}

/* Connect Component with Redux */
export default connect(mapStateToProps)(PickUpLocation)