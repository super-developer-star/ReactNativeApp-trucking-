import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import { DocumentPicker } from 'expo';
import styles from './styles';
import images from './../../config/images.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get("window");

export default class SignUp extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      company: '',
      companyValid: false,
      name: '',
      nameValid: false,
      phone: '',
      phoneValid: false,
      mc: '',
      mcValid: false,
      coi: '',
      coiValid: false,
      w9: '',
      w9Valid: false,
      atoc: '',
      atocValid: false,
      coiPlaceholder : 'Certificate of insurance',
      w9Placeholder : 'W9',
      atocPlceholder : 'Authority to Operate CDL'

    }

  }

  emailTextInput(email) {
    this.setState({ email : email })
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
      this.setState({ emailValid : true})
    }else{
      this.setState({ emailValid : false})
    }
  }

  passwordTextInput(password){
    this.setState({ password : password })
    if(password != ''){
      this.setState({ passwordValid : true})
    }else{
      this.setState({ passwordValid : false})
    }
  }

  companyTextInput(company){
    this.setState({ company : company })
    if(company != ''){
      this.setState({ companyValid : true})
    }else{
      this.setState({ companyValid : false})
    }
  }

  nameTextInput(name){
    this.setState({ name : name })
    if(name != ''){
      this.setState({ nameValid : true})
    }else{
      this.setState({ nameValid : false})
    }
  }
  phoneTextInput(phone){
    this.setState({ phone : phone })
    if(phone != ''){
      this.setState({ phoneValid : true})
    }else{
      this.setState({ phoneValid : false})
    }
  }
  mcTextInput(mc){
    this.setState({ mc : mc })
    if(mc != ''){
      this.setState({ mcValid : true})
    }else{
      this.setState({ mcValid : false})
    }
  }
  coiTextInput(coi){
    this.setState({ coi : coi })
    if(coi != ''){
      this.setState({ coiValid : true})
    }else{
      this.setState({ coiValid : false})
    }
  }
  w9TextInput(w9){
    this.setState({ w9 : w9 })
    if(w9 != ''){
      this.setState({ w9Valid : true})
    }else{
      this.setState({ w9Valid : false})
    }
  }
  atocTextInput(atoc){
    this.setState({ atoc : atoc })
    if(atoc != ''){
      this.setState({ atocValid : true})
    }else{
      this.setState({ atocValid : false})
    }
  }
  coiDoc(){
    let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    });
    this.setState({coiValid : true})
  }
  w9Doc(){
    let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    });
    this.setState({w9Valid : true})
  }
  atocDoc(){
    let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    });
    this.setState({atocValid : true})
  }


  render(){
    const { navigate, goBack } = this.props.navigation;
    const { email, emailValid, password, passwordValid, company, companyValid, name, nameValid, phone, phoneValid, mc,
      mcValid, coi, coiValid, w9, w9Valid, atoc, atocValid, coiPlaceholder, w9Placeholder, atocPlceholder } = this.state;
    return (
      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight]}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 50,marginTop : 30},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Back_Arrow}
          />
        </TouchableHighlight>
      </View>
        <ScrollView contentContainerStyle={[commonStyle.scrollContainer]}>
            <View style={[commonStyle.contentCenter]}>
                <Image
                style={{}}
                source={images.Axle_NoTires}
                />
                <View style={{paddingHorizontal : 40,paddingTop : 15}}>
                <Text style={[commonStyle.fontSize_16,{textAlign : 'center'}]}>
                  Please enter the following details to create your account
                </Text>
                </View>
            </View>

            <View style={commonStyle.paddingTop_41}>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>EMAIL ADDRESS</Text>

                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(email) => this.emailTextInput(email)}
                  underlineColorAndroid = "transparent"
                  value={email}
                  keyboardType = "email-address"
                  style={styles.txtInutStyle}
                  />

                  {
                    email != '' && emailValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }

                  </View>
              </View>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>PASSWORD*</Text>
                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(password) => this.passwordTextInput(password)}
                  underlineColorAndroid = "transparent"
                  value={password}
                  secureTextEntry ={true}
                  style={styles.txtInutStyle}
                  />
                  {
                   password != '' && passwordValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }
                  </View>
              </View>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>COMPANY</Text>
                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(company) => this.companyTextInput(company)}
                  underlineColorAndroid = "transparent"
                  value={company}
                  style={styles.txtInutStyle}
                  />
                  {
                   company != '' && companyValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }
                  </View>
              </View>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>CONTACT NAME</Text>
                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(name) => this.nameTextInput(name)}
                  underlineColorAndroid = "transparent"
                  value={name}
                  style={styles.txtInutStyle}
                  />
                  {
                   name != '' && nameValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }
                  </View>
              </View>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>PHONE</Text>
                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(phone) => this.phoneTextInput(phone)}
                  underlineColorAndroid = "transparent"
                  value={phone}
                  keyboardType={'numeric'}
                  style={styles.txtInutStyle}
                  />
                  {
                   this.state.phone != '' && this.state.phoneValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }
                  </View>
              </View>
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>MC#*</Text>
                <View style={styles.textInputParent}>

                <TextInput
                  onChangeText={(mc) => this.mcTextInput(mc)}
                  underlineColorAndroid = "transparent"
                  value={mc}
                  style={styles.txtInutStyle}
                  />

                  {
                   mc != '' && mcValid == true
                   ?<Image
                         style={[styles.marginTop_15]}
                         source={images.Check_Small}
                       />
                    : null
                  }
                  </View>
              </View>

              <View style={commonStyle.paddingBottom_24}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>UPLOAD</Text>

                <View style={commonStyle.paddingBottom_20}>
                  <View style={styles.textInputParent}>
                  <TouchableHighlight onPress={() => this.coiDoc()} underlayColor= "transparent" style={styles.txtInutStyle2}>
                       <Text style={[commonStyle.fontSize_14,{color: common.darkGrayColor,fontWeight : 'normal',marginTop : 10}]}>
                       {coiPlaceholder}
                       </Text>
                  </TouchableHighlight>
                     {/*<TextInput
                       onChangeText={(coi) => this.coiTextInput(coi)}
                       underlineColorAndroid = "transparent"
                       value={coi}
                       style={styles.txtInutStyle2}
                       placeholder = "Certificate of insurance"
                       />*/}
                       {
                        coiValid == true
                        ?<Image
                              style={[styles.marginTop_15,{position : 'absolute', right : 38}]}
                              source={images.Check_Small}
                            />
                         : null
                       }
                       <Image
                           style={[styles.marginTop_15,styles.marginLeft_10,{position : 'absolute', right : 10}]}
                           source={images.Upload}
                         />
                       </View>
                </View>

                <View style={commonStyle.paddingBottom_20}>
                <View style={styles.textInputParent}>
                <TouchableHighlight onPress={() => this.w9Doc()} underlayColor= "transparent" style={styles.txtInutStyle2}>
                     <Text style={[commonStyle.fontSize_14,{color: common.darkGrayColor,fontWeight : 'normal',marginTop : 10}]}>
                     {w9Placeholder}
                     </Text>
                </TouchableHighlight>
                   {/*<TextInput
                     onChangeText={(w9) => this.w9TextInput(w9)}
                     underlineColorAndroid = "transparent"
                     value={w9}
                     style={styles.txtInutStyle2}
                      placeholder = "W9"
                     />*/}
                     {
                      w9Valid == true
                      ?<Image
                            style={[styles.marginTop_15,{position : 'absolute', right : 38}]}
                            source={images.Check_Small}
                          />
                       : null
                     }
                     <Image
                         style={[styles.marginTop_15,styles.marginLeft_10,{position : 'absolute', right : 10}]}
                         source={images.Upload}
                       />
                     </View>
                </View>

                <View>
                <View style={styles.textInputParent}>
                <TouchableHighlight onPress={() => this.atocDoc()} underlayColor= "transparent" style={styles.txtInutStyle2}>
                     <Text style={[commonStyle.fontSize_14,{color: common.darkGrayColor,fontWeight : 'normal',marginTop : 10}]}>
                      {atocPlceholder}
                     </Text>
                </TouchableHighlight>
                   {/*<TextInput
                     onChangeText={(atoc) => this.atocTextInput(atoc)}
                     underlineColorAndroid = "transparent"
                     value={atoc}
                     style={styles.txtInutStyle2}
                       placeholder = "Authority to Operate CDL"
                     />*/}
                     {
                      atocValid == true
                      ?<Image
                            style={[styles.marginTop_15,{position : 'absolute', right : 38}]}
                            source={images.Check_Small}
                          />
                       : null
                     }
                     <Image
                         style={[styles.marginTop_15,styles.marginLeft_10,{position : 'absolute', right : 10}]}
                         source={images.Upload}
                       />
                     </View>

                </View>
              </View>

              <View style={{paddingHorizontal : 40,paddingBottom : 26}}>
                <Text style={[commonStyle.fontSize_11,{textAlign : 'center'}]}>By creating an account, you agree to Axle’s Privacy Policy and Terms & Conditions</Text>
              </View>

              {
                emailValid == true && passwordValid == true && companyValid == true && nameValid == true && phoneValid == true && mcValid == true && coiValid == true && w9Valid == true && atocValid == true
                ?<TouchableHighlight onPress={() => navigate('Otp')} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor}]}>
                     <Text style={[commonStyle.fontSize_14,{fontFamily:'ProximaNova-Bold'}]}>CREATE ACCOUNT</Text>
                </TouchableHighlight>
                :<TouchableHighlight underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor}]}>
                     <Text style={[commonStyle.fontSize_14,{fontFamily:'ProximaNova-Bold'}]}>CREATE ACCOUNT</Text>
                </TouchableHighlight>
              }

              <View style={[commonStyle.contentCenter,{paddingTop : 26,paddingBottom : 27}]}>
                <Text onPress={() => navigate('Login')} style={[commonStyle.fontSize_14,{color : common.blackColor,fontWeight:'normal'}]}>
                Already have an account?  Login here
                </Text>
              </View>

            </View>


        </ScrollView>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
