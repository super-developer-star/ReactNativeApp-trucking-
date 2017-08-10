import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Dimensions, Keyboard } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import { AsyncStorage } from 'react-native';
import { otpRequest } from './../../actions/auth';
import {bindActionCreators} from 'redux';
import { connect } from  'react-redux';

let self;
let window = Dimensions.get("window");

class Otp extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);
    self= this;
    this.state = {
      first : '',
      second : '',
      third : '',
      fourth : '',
      // fifth : ''
    }

  }

  firstInput(first){
    this.setState({first});
    this.refs.second.focus()
  }
  secondInput(second){
    this.setState({second});
    this.refs.third.focus()
  }
  thirdInput(third){
    this.setState({third});
    this.refs.fourth.focus()
  }
  fourthInput(fourth){
    this.setState({fourth});
    // this.refs.fifth.focus()
  }
  // fifthInput(fifth){
  //   this.setState({fifth});
  //   Keyboard.dismiss()
  //   // this.refs.second.focus()
  // }

  firstInputFocus(){
    this.setState({first : '', second : '',third : '',fourth : ''});
  }
  secondInputFocus(){
    this.setState({second : '',third : '',fourth : ''});
  }
  thirdInputFocus(){
    this.setState({third : '',fourth : ''});
  }
  fourthInputFocus(){
    this.setState({fourth : ''});
  }
  // fifthInputFocus(){
  //   this.setState({fifth : ''});
  // }

  onFinish = () => {
    let data = {
      OTPCode:this.state.first+this.state.second+this.state.third+this.state.fourth
    };
    console.log("OTP", data.OTPCode)
     AsyncStorage.getItem('@Axle:token')
      .then((value) => {
          if(value)
            {
               (this.props.actions.otpRequest(data, value))
                .then(function(){
                    self.props.navigation.navigate('SignupPending')
                })
                .catch(function(){
                    // TODO: any processing
                }) 
             
            }
      })
        // navigate('SignupPending')
  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    const { first, second, third, fourth, fifth } = this.state;
    return (
      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight]}>
        <View style={{}}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 50,marginTop :22},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Back_Arrow}
          />
        </TouchableHighlight>
        </View>
      </View>
        <View style={commonStyle.subContainer}>
            <View style={[commonStyle.contentCenter,{paddingHorizontal : 50}]}>
              <Image
                style={{marginBottom : 15}}
                source={images.Axle_NoTires}
              />
                <Text style={[commonStyle.fontSize_16,{textAlign : 'center'}]}>Please enter the one-time password sent to your mobile</Text>
            </View>


            <View style={[{paddingTop : 49}]}>

              <View style={[commonStyle.contentCenter,{flexDirection  :'row'}]}>
              <View style={styles.otpView}>
                <TextInput
                  style={[{height : 40,width : 40},commonStyle.fontSize_36,{fontFamily:'ProximaNova-Bold',fontWeight :'bold',textAlign : 'center'}]}
                  onChangeText={(first) => this.firstInput(first)}
                  value={first}
                  maxLength = {1}
                  autoFocus= {true}
                  ref = "first"
                  underlineColorAndroid="transparent"
                  keyboardType={'numeric'}
                  onFocus = {() => this.firstInputFocus()}
                />
                </View>
                <View style={styles.otpView}>
                  <TextInput
                    style={[{height : 40,width : 40},commonStyle.fontSize_36,{fontFamily:'ProximaNova-Bold',fontWeight :'bold',textAlign : 'center'}]}
                    onChangeText={(second) => this.secondInput(second)}
                    value={second}
                    maxLength = {1}
                    keyboardType={'numeric'}
                    ref = "second"
                    underlineColorAndroid="transparent"
                    onFocus = {() => this.secondInputFocus()}
                  />
                </View>
                  <View style={styles.otpView}>
                    <TextInput
                      style={[{height : 40,width : 40},commonStyle.fontSize_36,{fontFamily:'ProximaNova-Bold',fontWeight :'bold',textAlign : 'center'}]}
                      onChangeText={(third) => this.thirdInput(third)}
                      value={third}
                      maxLength = {1}
                      keyboardType={'numeric'}
                      ref = "third"
                      onFocus = {() => this.thirdInputFocus()}
                    />
                  </View>
                    <View style={styles.otpView}>
                      <TextInput
                        style={[{height : 40,width : 40},commonStyle.fontSize_36,{fontFamily:'ProximaNova-Bold',fontWeight :'bold',textAlign : 'center'}]}
                        onChangeText={(fourth) => this.fourthInput(fourth)}
                        value={fourth}
                        keyboardType={'numeric'}
                        maxLength = {1}
                        ref = "fourth"
                        underlineColorAndroid="transparent"
                        onFocus = {() => this.fourthInputFocus()}
                      />
                  </View>
                      {/* <View style={styles.otpView}>
                        <TextInput
                          style={[{height : 40,width : 40},commonStyle.fontSize_36,{fontFamily:'ProximaNova-Bold',fontWeight :'bold',textAlign : 'center'}]}
                          onChangeText={(fifth) => this.fifthInput(fifth)}
                          value={fifth}
                          keyboardType={'numeric'}
                          maxLength = {1}
                          ref = "fifth"
                          underlineColorAndroid="transparent"
                          onFocus = {() => this.fifthInputFocus()}
                        />
                  </View> */}
              </View>
            </View>

              {
                fourth != ''
                ?<TouchableHighlight onPress={() => this.onFinish()} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,position : 'absolute', bottom : 20}]}>
                  <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>FINISH</Text>
                </TouchableHighlight>
                :<TouchableHighlight underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor,position : 'absolute', bottom : 20}]}>
                  <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>FINISH</Text>
                </TouchableHighlight>
              }


        </View>


      </View>
    )
  }
  //************************************** Render end*****************************//
};

function mapStateToProps(state){
    console.log("STATE", state.auth.token)
    return {
        auth: state.auth,
        token: state.auth.token,
        data: state.LoginReducer
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            otpRequest
            
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Otp)