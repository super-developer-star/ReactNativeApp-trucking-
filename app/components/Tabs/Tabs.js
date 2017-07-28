import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Hr from 'react-native-hr';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import styles from './styles';

export default class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{flex:1, flexDirection:'row',width:window.width, alignItems: 'center', justifyContent: 'center', marginHorizontal:20}}>
              <TouchableOpacity onPress={() => this.props.navigate('Shipments')} style={styles.eachTabContainer}>
                <Image source={images.Pin_Menu_White} />
                <Text style={styles.shipments}>SHIPMENTS</Text>
                {this.props.state.routeName == 'Shipments' &&
                  <Hr lineStyle={{backgroundColor: common.greenColor,height: 3,marginTop: 5}} />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigate('Payments')} style={styles.eachTabContainer}>
                <Image source={images.Bill_White}  />
                <Text style={styles.payments}>PAYMENTS</Text>
                {this.props.state.routeName == 'Payments' &&
                  <Hr lineStyle={{backgroundColor: common.greenColor,height: 3,marginTop: 5}} />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigate('Referrals')} style={styles.eachTabContainer}>
                <Image source={images.Gift_Tab}  />
                <Text style={styles.referrals}>REFERRALS</Text>
                {this.props.state.routeName == 'Referrals' &&
                  <Hr lineStyle={{backgroundColor: common.greenColor,height: 3,marginTop: 5}} />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigate('Contact')} style={styles.eachTabContainer}>
                <Image source={images.Phone_Tab}/>
                <Text style={styles.contact}>CONTACT US</Text>
                {this.props.state.routeName == 'Contact' &&
                  <Hr lineStyle={{backgroundColor: common.greenColor,height: 3,marginTop: 5}} />
                }
              </TouchableOpacity>
          </View>
      </View>
    )
  }
};
