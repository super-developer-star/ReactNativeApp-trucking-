import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableHighlight } from 'react-native';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';
import MapContainer from './../../layouts/common/Map/Map';
import ProgressBar from './../../layouts/common/ProgressBar/ProgressBar';
import ToAndFrom from './../../layouts/common/ToAndFrom/ToAndFrom';

import styles from './styles';
import commonStyle from './../../config/commonStyle.js';
import images from './../../config/images.js';

export default class PickUpLocation extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
      const { navigate,goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
          <View style={{height: 180}}>
            <LocationBlock
              title="Pickup Location"
              place="Warehouse"
              street="1234 John Street"
              location="Los Angeles, California 90001" />
            </View>
          <TouchableHighlight onPress={() => navigate('DropOffLocation')} >
            <View>
              <MapContainer/>
            </View>
          </TouchableHighlight>
          <View style={{height:50}}>
          <ProgressBar title="Pickup in progress" progressValue={93}/>
          </View>
          <View style={{height: 187}}>
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
