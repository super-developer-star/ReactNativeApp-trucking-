import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Dimensions } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get("window");

export default class ForgotPassword extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);
    self= this;
    this.state = {
      forgotEmail : '',
      forgotEmailValid: false,
    }

  }

  emailTextInput(forgotEmail) {
    this.setState({ forgotEmail : forgotEmail })
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(forgotEmail)){
      this.setState({ forgotEmailValid : true})
    }else{
      this.setState({ forgotEmailValid : false})
    }
  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    const { forgotEmail, forgotEmailValid } = this.state;
    return (
      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight90,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <View style={{flex:0.5}}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 50,marginTop :32},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Arrow_White_Left}
          />
        </TouchableHighlight>
        </View>
        <View style={[{flex:1, marginTop : 35}]}>
          <Text style={[commonStyle.fontSize_16,styles.fontProximaNovaBold,{color: common.whiteColor}]}>Forgot Password</Text>
        </View>
      </View>
        <View style={commonStyle.subContainer}>
            <View style={[commonStyle.contentCenter,{paddingHorizontal : 30,paddingTop : 35}]}>
                <Text style={[commonStyle.fontSize_16,{textAlign : 'center'}]}>Enter your registered phone number or email to reset your password</Text>
            </View>


            <View style={[{paddingTop : 59},styles.forgotTextInput]}>

              <View style={commonStyle.contentCenter}>

                <TextInput
                  onChangeText={(forgotEmail) => this.emailTextInput(forgotEmail)}
                  underlineColorAndroid = "transparent"
                  value={forgotEmail}
                  placeholder= "Phone number or email address"
                  keyboardType = 'email-address'
                  style={[commonStyle.fontSize_16,styles.txtInutStyle,{width : window.width - 40,textAlign:'center'}]}
                  />

                </View>
            </View>

            {
              forgotEmail != '' && forgotEmailValid == true
              ?<TouchableHighlight onPress={() => navigate('NewPassword')} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,position : 'absolute', bottom : 20}]}>
                <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>CONTINUE</Text>
              </TouchableHighlight>
              :<TouchableHighlight underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor,position : 'absolute', bottom : 20}]}>
                <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>CONTINUE</Text>
              </TouchableHighlight>

            }


        </View>


      </View>
    )
  }
  //************************************** Render end*****************************//
};
