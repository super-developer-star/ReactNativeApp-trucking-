import React, { Component } from 'react';
import { Text, ScrollView, View,TouchableHighlight } from 'react-native';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';
import MapContainer from './../../layouts/common/Map/Map';
import ProgressBar from './../../layouts/common/ProgressBar/ProgressBar';
import ToAndFrom from './../../layouts/common/ToAndFrom/ToAndFrom';

import styles from './styles';
import commonStyle from './../../config/commonStyle.js';
import images from './../../config/images.js';

export default class DropOffLocation extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    const { navigate,goBack } = this.props.navigation;
    return (
      <View style={[styles.container, commonStyle.container]}>
          <LocationBlock
            title="Drop-off Location"
            place="ABC Business"
            street="927 Casion Ave"
            location="Las Vegas, Nevada 45900" />

        <TouchableHighlight onPress={() => navigate('TripComplete')} >
          <View>
            <MapContainer/>
          </View>
        </TouchableHighlight>
        <ProgressBar title="Delivery in progress" progressValue={173}/>
        <View style={{height: 187}}>
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
