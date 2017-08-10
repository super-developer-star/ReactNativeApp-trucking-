import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,Dimensions } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";

import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get('window');

export default class TripOverview extends Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {

    }
  }

  render() {
    let {trip, onPress} = this.props;

    return (
      <TouchableHighlight>
      <View style={styles.ScreenContainer}>

      <View style={[{marginTop : 0},commonStyle.contentRight]}>
          <TouchableHighlight onPress={() => onPress()} underlayColor ="transparent" style={[{height : 35, width : 60,},commonStyle.contentCenter]}>
            <Image
                  style={{}}
                  source={images.Plus}
                />
          </TouchableHighlight>
      </View>

      <View style={{flexDirection :'row'}}>
        <View style={{width: 61}}>
        <Grid style={{}}>
          <Col>
            <View style={styles.dot}/>
            <Image
              source={images.dotted_line}
              style={styles.dotted_line}
            />
            <Image
              source={images.dotted_line}
              style={styles.dotted_line}
            />
            <Image
              source={images.pin}
              style={styles.pin}
            />
          </Col>

        </Grid>
        </View>
        <View>
          <View>
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{trip.pickupCity + ', ' + trip.pickupState}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{new Date(trip.pickupDateTimeFrom).toLocaleString()}</Text>
          </View>
          <View style={{marginTop :15}}>
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{trip.deliveryCity + ', ' + trip.deliveryState}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{new Date(trip.deliveryDateTimeTo).toLocaleString()}</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop : 20,borderTopWidth : 1, borderTopColor : common.grayColor}}>
        <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 20}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{'DEADHEAD'}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{trip.deadhead || 0}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{'PRICE'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{trip.lowPrice}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12]}>{'DISTANCE'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{trip.distance + 'mi'}</Text>
            </View>
        </View>
      </View>

      </View>
      </TouchableHighlight>
    )
  }
}
