import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
// import { Components } from 'expo';
import images from '../../../config/images.js';
import styles from './styles';
// const coordinates = {
//   latitude: -36.8457991,
//   longitude: 174.7666099,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// }

/* Mapbox */
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import accessToken from './../../../utils/AccessToken';
Mapbox.setAccessToken(accessToken);

export default class MapContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <View style={{flex:1}}>
        <MapView
            ref={map => { this._map = map; }}
            style={{flex:1}}
            initialZoomLevel={3}
            initialCenterCoordinate={{latitude:0, longitude:0}}
            initialDirection={0}
            rotateEnabled={false}
            scrollEnabled={true}
            zoomEnabled={true}
            showsUserLocation={true}
            userLocationVisible={true}
            styleURL={Mapbox.mapStyles.streets}
            userTrackingMode={Mapbox.userTrackingMode.followWithHeading}
          >
          <Annotation
            id="location"
            coordinate={this.props.location}
            style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
          >
            <View style={{width: 100, height: 100, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.Pin_Map} />
            </View>
          </Annotation>
        </MapView>
      </View>
    )
  }
};
