import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';

import styles from './styles';

export default class ToAndFromFooter extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          heading: 'DEADHEAD',
          title: '20mi'
        },
        {
          heading: 'DEADHEAD',
          title: '20mi'
        },
        {
          heading: 'DEADHEAD',
          title: '20mi'
        }
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
        <View style={styles.wrapper}>
          <View style={{flex:1}}>
            <Text style={styles.heading}>DEADHEAD</Text>
            <Text style={styles.subText}>20mi</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>PRICE</Text>
            <Text style={styles.subText}>$2000</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>DISTANCE</Text>
            <Text style={styles.subText}>600mi</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={{flex:1}}>
            <Text style={styles.heading}>COMMODITY</Text>
            <Text style={styles.subText}>Produce</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>REFERENCE</Text>
            <Text style={styles.subText}>123456D</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>WEIGHT</Text>
            <Text style={styles.subText}>500kg</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={{flex:1}}>
            <Text style={styles.heading}>COMMODITY</Text>
            <Text style={styles.subText}>Produce</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>REFERENCE</Text>
            <Text style={styles.subText}>123456D</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.heading}>WEIGHT</Text>
            <Text style={styles.subText}>500kg</Text>
          </View>
        </View>
        </View>
      </View>
    )
  }
};
