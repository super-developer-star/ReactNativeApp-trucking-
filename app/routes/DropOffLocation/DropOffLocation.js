import React, { Component } from 'react';
import { Text, ScrollView, View,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';
import MapContainer from './../../layouts/common/Map/Map';
import ProgressBar from './../../layouts/common/ProgressBar/ProgressBar';
import ToAndFrom from './../../layouts/common/ToAndFrom/ToAndFrom';

import styles from './styles';
import commonStyle from './../../config/commonStyle.js';
import images from './../../config/images.js';

class DropOffLocation extends Component {
  constructor(props){
    super(props);

    this.state = {
        deliveryLocation : {
          latitude: this.props.shipments.selectedShipment.deliverylocationlat,
          longitude: this.props.shipments.selectedShipment.deliverylocationlong,
        }
    }
  }

  render(){
    const { navigate,goBack } = this.props.navigation;
    const { deliveryLocation } = this.state;
    return (
      <View style={commonStyle.container}>
        <View style={{height:'25%'}}>
          <LocationBlock
            title="Drop-off Location"
            place="ABC Business"
            street="927 Casion Ave"
            location="Las Vegas, Nevada 45900" />
        </View>
        <TouchableHighlight onPress={() => navigate('TripComplete')} >
          <View style={{height:250}}>
            <MapContainer location={deliveryLocation} />
          </View>
        </TouchableHighlight>
        <ProgressBar title="Delivery in progress" progressValue={173}/>
        <View style={{height: '35%'}}>
        <TouchableHighlight onPress={() => navigate('DeliveryInProgress')} >
          <View>
          <ToAndFrom arrowType={images.Arrow_Right}/>
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
export default connect(mapStateToProps)(DropOffLocation)