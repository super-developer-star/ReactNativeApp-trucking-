import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

export default class ToAndFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location, date, timeInterval, phoneNumber } = this.props
    return (
      <View style={ styles.wrapper }>
        <Text style={ styles.location }>{ location }</Text>
        <Text style={ styles.dateTimePhoneNumber }>{ date }  •  {timeInterval} (pt)</Text>
        <Text style={ styles.dateTimePhoneNumber }>{ phoneNumber }</Text>
      </View>
    )
  }
}
