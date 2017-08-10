import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Button,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';
import { getSize} from './../../layouts/common/RatioCalculator/ratio';

let window = Dimensions.get("window");
import Hr from 'react-native-hr';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import images from './../../config/images.js';
import styles from './styles.js';
import Header from './../../layouts/common/Header/Header.js';
import Validation from './Validation';


export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'Jhon',
      firstNameInvalid: false,
      last_name: 'Smith',
      lastNameInvalid: false,
      email_address: 'name@email.com',
      emailInvalid:false,
      mobile: '(123) 456-7890',
      phoneInvalid:false
    }
    this.emailCheck = this.emailCheck.bind(this);
    this.firstNameCheck = this.firstNameCheck.bind(this);
    this.lastNameCheck = this.lastNameCheck.bind(this);
    this.phoneCheck = this.phoneCheck.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.mobileNumberTextInput = this.mobileNumberTextInput.bind(this);

  }

  mobileNumberTextInput(value){
    if (value.length < 16) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d\d\d)(\d)/g, "($1) $2");
        value = value.replace(/(\d{4})(\d)/, "$1 - $2");
    }
    else if (value.length == 16) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d\d\d)(\d)/g, "($1) $2");
        value = value.replace(/(\d{3})(\d)/, "$1 - $2");
    }
    else {
        value = value.substring(0, value.length - 1);
    }
    this.setState({ mobile : value })
  }

  onChangeText(input_name) {
    // if (Validation.format())
  }

  emailCheck(email_address) {
    this.setState({email_address});
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email_address)) {
      this.setState({emailInvalid: false})
    } else {
      this.setState({emailInvalid: true});
    }
  }

  firstNameCheck(first_name) {
    this.setState({first_name});
    if (!first_name) {
      this.setState({firstNameInvalid: true})
    } else {
      this.setState({firstNameInvalid: false})
    }
  }

  lastNameCheck(last_name) {
    this.setState({last_name});
    if (!last_name) {
      this.setState({lastNameInvalid: true})
    } else {
      this.setState({lastNameInvalid: false})
    }
  }

  phoneCheck(phone) {
    this.setState({phone});
    if (!phone) {
      this.setState({phoneInvalid: true})
    } else {
      this.setState({phoneInvalid: false})
    }
  }

  onTextChange() {
    console.log(this.refs.email_address._lastNativeText);
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
        <Header title={"Profile"} goBack={goBack}/>
        <View style={styles.Content}>
          <View style={styles.ProfileContainer}>
            <View style={styles.Avatar}>
              <Image source={images.Pic_Empty} style={styles.avatar}/>
            </View>
            <View style={styles.ProfileInfo}>
              <Text style={styles.ProfileName}>John Smith</Text>
              <Text style={styles.ProfileDesignation}>Owner/Operator</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.ProfileDetails}>
            <View style={styles.FormBlock}>
              <Text style={styles.Label}>FIRST NAME</Text>
                <TextInput style={styles.Input} autoCorrect={false} autoCapitalize="none" onChangeText={(first_name) => this.firstNameCheck(first_name)}/>
                {/*{this.state.firstNameInvalid ?
                  <Image source={images.Close} style={styles.InvalidImage}/>:
                  null
                }*/}
            </View>
            <View style={styles.FormBlock}>
              <Text style={styles.Label}>LAST NAME</Text>
                <TextInput style={styles.Input} autoCorrect={false}  autoCapitalize="none" onChangeText={(last_name) => this.lastNameCheck(last_name)}/>
                {/*{this.state.lastNameInvalid ?
                  <Image source={images.Close} style={styles.InvalidImage}/>:
                  null
                }*/}
            </View>
            <View style={styles.FormBlock}>
              <Text style={styles.Label} >EMAIL ADDRESS</Text>
                <TextInput style={styles.Input} autoCorrect={false}  autoCapitalize="none" onChangeText={(email_address) => this.emailCheck(email_address)}/>
                {/*{this.state.emailInvalid ?
                  <Image source={images.Close} style={styles.InvalidImage}/>:
                  null
                }*/}
            </View>
            <View style={styles.FormBlock}>
              <Text style={styles.Label}>PHONE</Text>
                  <TextInput style={styles.Input} value={this.state.mobile} onChangeText={(mobile) => this.mobileNumberTextInput(mobile)}  underlineColorAndroid = "transparent"
                  keyboardType = 'numeric'
                  maxLength = {16}/>
                  {/*{this.state.emailInvalid ?
                    <Image source={images.Close} style={s.InvalidImage}/>:
                    null
                  }*/}
            </View>
            <View style={styles.ButtonContainer}>
              <View style={styles.ButtonFlex}>
                <TouchableHighlight>
                  <Text style={styles.ButtonText}>UPDATE</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
};
