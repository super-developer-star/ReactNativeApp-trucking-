import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,Dimensions} from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
import config from './../../config/config';

/* Actions */
import { loginRequest } from './../../actions/auth';

let self;
let window = Dimensions.get("window");
class Login extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      mobile:'',
      password: '',

    }
    this.mobileNumberTextInput = this.mobileNumberTextInput.bind(this);
    this.passwordTextInput = this.passwordTextInput.bind(this);
    this.onLogin = this.onLogin.bind(this);

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
  passwordTextInput(password){
    this.setState({ password : password })
  }
  onLogin(){
    let data = {
          mobile: this.state.mobile.replace(/[- )(]/g,'', ''),
          password: this.state.password,
          deviceType: config.DEVICE_TYPE,
          role: "driver",
          // temporary till testing
          flushPreviousSessions: true
      };
      (this.props.actions.loginRequest(data))
          .then(function(){
              self.props.navigation.navigate('PickUpHome')
          })
          .catch(function(){
              // TODO: any processing
          })

  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
      <View style={commonStyle.headerBarHeight}>
        <TouchableHighlight onPress={() => goBack() } underlayColor="transparent" style={[{width : 60,height : 50,marginTop : 30},commonStyle.contentCenter]}>

          <Image
            style={{width : 21, height : 18}}
            source={images.Back_Arrow}
          />
        </TouchableHighlight>
      </View>
        <View style={commonStyle.subContainer}>
            <View style={commonStyle.contentCenter}>
              <Image
              style={{}}
              source={images.Axle_NoTires}
              />

              <Text style={[commonStyle.fontSize_16,{color:common.blackColor,lineHeight:30,paddingTop:10}]}>Login to access your account</Text>
            </View>

            <View style={{paddingTop:56}}>

                    <View style={commonStyle.paddingBottom_16}>
                        <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>MOBILE NUMBER</Text>
                      <View style={styles.textInputParent}>

                      <TextInput
                        onChangeText={(mobile) => this.mobileNumberTextInput(mobile)}
                        underlineColorAndroid = "transparent"
                        value={this.state.mobile}
                        keyboardType = 'numeric'
                        maxLength = {16}
                        placeholder = '( _ _ _ ) _ _ _  -  _ _ _ _'
                        style={[styles.txtInutStyle,{width : window.width - 70,}]}
                        />
                        <Image
                            style={{marginTop :8}}
                            source={images.Phone_Menu}
                          />
                        </View>
                    </View>

                    <View style={commonStyle.paddingBottom_16}>
                      <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>PASSWORD</Text>

                      <View style={styles.textInputParent}>

                      <TextInput
                         onChangeText={(password) => this.passwordTextInput(password)}
                        underlineColorAndroid = "transparent"
                        value={this.state.password}
                        secureTextEntry ={true}
                        style={styles.txtInutStyle}
                        />
                        <Image
                            style={[styles.marginTop_10,{marginRight :8}]}
                            source={images.Lock}
                          />
                        </View>
                  </View>
                  {
                    this.state.mobile !='' &&  this.state.password != ''
                    ?<TouchableHighlight onPress={() => this.onLogin() } underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,marginTop:20}]}>
                      <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>LOGIN</Text>
                    </TouchableHighlight>
                    :<TouchableHighlight underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor,marginTop:20}]}>
                      <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>LOGIN</Text>
                    </TouchableHighlight>
                  }
                </View>
            </View>

            <View style={{}}>
                  <TouchableHighlight underlayColor="transparent" onPress={() => navigate('ForgotPassword')}  style={[commonStyle.contentCenter,{bottom:47}]}>
                    <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold,{color:common.blackColor}]}>Forgot your Password?</Text>
                  </TouchableHighlight>

                {
                    (this.props.auth.isOwner)?(
                        <TouchableHighlight underlayColor="transparent" onPress={() => navigate('SignUp')} style={[commonStyle.contentCenter,{bottom:34}]}>
                            <Text style={[commonStyle.fontSize_14,{color:common.blackColor,fontWeight : 'normal'}]}>Don’t have an account? Sign up here</Text>
                        </TouchableHighlight>
                    ):null
                }

            </View>
      </View>
    )
  }
  //************************************** Render end*****************************//
};

/* Map state to props */
function mapStateToProps(state){
    return {
        auth: state.auth,
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loginRequest
        }, dispatch)
    };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Login)