import React , { Component }from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
  Button
} from 'react-native';

let window = Dimensions.get("window");
// import { FontAwesome } from '@expo/vector-icons';

import commonStyle from './../../../config/commonStyle.js';
import images from './../../../config/images.js';
import styles from './styles';
import ContactBlock from './ContactBlock';
import Hr from 'react-native-hr';

import common from './../../../config/common.js';
import Tabs from './../../../components/Tabs/Tabs.js';

export default class ContactUs extends Component {
  render() {
    const { navigate, goBack, state } = this.props.navigation;
    return (
      <View style={styles.container}>
          <StatusBar
           backgroundColor="white"
           barStyle="light-content"
         />
        <View style={styles.header}>
          <View style={styles.topHeaderContainer}>
          <TouchableHighlight underlayColor="transparent" onPress={() => goBack()}>
            <Image
            style={styles.leftArrow}
              source={images.Arrow_White_Left}
            />
          </TouchableHighlight>
            <Text style={styles.headerTitle}>Contact</Text>
          </View>
        </View>
        <View style={[styles.content]}>
            <Text style={[styles.horizontalMargin25,styles.subTitle, {height: 60, paddingTop: 24, width: 320}]}>ASK US ANYTHING</Text>
            <Text style={[styles.horizontalMargin25,styles.subTitle]}>& EVERYTHING</Text>
          <View style={[styles.horizontalMargin20,styles.padding26]}>
              <ContactBlock imageName="Phone_Green_Contact" info="(201) 333-AXLE (2953)"/>
              <ContactBlock imageName="Email_Green_Contact" info="support@axletrucking.com"/>
              <ContactBlock imageName="Pin_Green_Contact" info="190 Christopher Columbus Dr.Jersey City, NJ 07302"/>
          </View>
        </View>
        <Tabs state={state} navigate={navigate}/>
      </View>
    )
  }
}
