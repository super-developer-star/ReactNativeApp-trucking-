import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, ScrollView, Dimensions, Picker, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { DocumentPicker, ImagePicker } from 'expo';
import styles from './styles';
import images from './../../config/images.js';
import common from './../../config/common.js';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
import config from './../../config/config';
import { Uploader } from '../../utils/Uploader';
import { getAllTruckTypes } from './actionCreator';
/* Actions */
import { signUpRequest } from './../../actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome';


let self;
let window = Dimensions.get("window");

class SignUp extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      email: 'borys@gmail.com',
      emailValid: false,
      password: '123456789',
      passwordValid: false,
      company: 'borys',
      companyValid: false,
      name: 'borys',
      nameValid: false,
      phone: '17462742',
      phoneValid: false,
      mc: '123456666asdf',
      mcValid: false,
      coi: {},
      coiValid: false,
      w9:{},
      w9Valid: false,
      atoc: {},
      atocValid: false,
      coiPlaceholder : 'Certificate of insurance',
      w9Placeholder : 'W9',
      atocPlceholder : 'Authority to Operate CDL',
      truckType: [],
      isDropOpen: false,
      isLoading: false
    }

    this.onSignUp = this.onSignUp.bind(this);
    this.chooseTrailer = this.chooseTrailer.bind(this);

  }

  componentDidMount() {
    this.props.actions.getAllTruckTypes();
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
  coiDoc = async () => {
    // let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    // });
    Uploader()
      .then((response) => {
        let coidata = {
          uri: response.uri,
          type: 'image/jpeg',
          name: response.uri.split('/')[response.uri.split('/').length - 1]
        }
        this.setState({coi: coidata, coiValid : true});
      });
    // let result = await ImagePicker.launchImageLibraryAsync();
    // console.log("status = ", result.cancelled);
    // if (!result.cancelled){
    //   console.log("image url", result.uri);
    //   console.log("daf", result.uri.split('/')[result.uri.split('/').length - 1]);
    //   let coidata = {
    //     uri: result.uri,
    //     type: 'image/jpeg',
    //     name: result.uri.split('/')[result.uri.split('/').length - 1]
    //   }
    //   this.setState({coi: coidata});
    // }
    // this.setState({coiValid : true})
  }
  w9Doc(){
    // let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    // });
    // let result = await ImagePicker.launchImageLibraryAsync();
    // if (!result.cancelled){
    //   let w9data = {
    //     uri: result.uri,
    //     type: 'image/jpeg',
    //     name: result.uri.split('/')[result.uri.split('/').length - 1]
    //   }
    //   this.setState({w9: w9data});
    // }
    // this.setState({w9Valid : true})
    Uploader()
      .then((response) => {
        let w9data = {
          uri: response.uri,
          type: 'image/jpeg',
          name: response.uri.split('/')[response.uri.split('/').length - 1]
        }
        this.setState({w9: w9data, w9Valid : true});
      });
  }
  atocDoc = async () => {
    // let result = DocumentPicker.getDocumentAsync({},(err,res) =>{

    // });
    Uploader()
      .then((response) => {
        let atocdata = {
          uri: response.uri,
          type: 'image/jpeg',
          name: response.uri.split('/')[response.uri.split('/').length - 1]
        }
        this.setState({atoc: atocdata, atocValid : true});
      })
    // let result = await ImagePicker.launchImageLibraryAsync();
    // if (!result.cancelled){
    //   let atocdata = {
    //     uri: result.uri,
    //     type: 'image/jpeg',
    //     name: result.uri.split('/')[result.uri.split('/').length - 1]
    //   }
    //   this.setState({atoc: atocdata});
    // }
    // this.setState({atocValid : true})
  }
  onSignUp(){
      let formData = new FormData();
      formData.append("name", this.state.name)
      formData.append("email",this.state.email)
      formData.append("password", this.state.password)
      formData.append("mobile", this.state.phone)
      formData.append("company_name", this.state.company)
      formData.append("deviceToken", "456fdfdfdf789")
      formData.append("country_code", "+977")
      formData.append( "appVersion", "4.0")
      formData.append("latitude", "52")
	    formData.append("longitude", "100")
	    formData.append("MCNumber",this.state.mc)
      formData.append("deviceType", config.DEVICE_TYPE)
      formData.append("certificateOfInsurance",this.state.coi),
      formData.append("authorityLetter",this.state.atoc),
      formData.append("w9",this.state.w9)
      formData.append("truckType",  JSON.stringify(this.state.truckType))

      console.log('onSignup: ', formData);
      this.setState({isLoading: false});
     (this.props.actions.signUpRequest(formData))
          .then(function(){
            this.setState({isLoading: true});
            self.props.navigation.navigate('SignupPending')
          })
          .catch(function(){
              // TODO: any processing
          })
  }

  chooseTrailer(type) {
    this.setState({truckType: [type], isDropOpen: false});
  }

  render(){
    const { navigate, goBack } = this.props.navigation;
    const { email, emailValid, password, passwordValid, company, companyValid, name, nameValid, phone, phoneValid, mc,
      mcValid, coi, coiValid, w9, w9Valid, atoc, atocValid, coiPlaceholder, w9Placeholder, atocPlceholder } = this.state;
       var spinner = this.state.isLoading ?
            ( <ActivityIndicator
                size='large' color= 'red'/>) :
            ( <View/>)
    return (
      this.state.isLoading ?
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>{spinner}</View>
      :<View style={commonStyle.container}>
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
              <View style={commonStyle.paddingBottom_16}>
                <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>Trailer Type</Text>
                <View style={styles.textInputParent}>
                  <TouchableOpacity style={{flex:1,height: 40, flexDirection:'row', alignItems: 'center', marginHorizontal: 10}} onPress={() => this.setState({isDropOpen: !this.state.isDropOpen})}>
                    <View style={{flex:7}}><Text>{this.state.truckType.length ? this.state.truckType[0] : 'Select trailer type'}</Text></View>
                    <View ><Icon name="chevron-down"/></View>
                  </TouchableOpacity>
                </View>
                {this.state.isDropOpen &&
                  <View style={[{flex:1, borderWidth: 1, borderColor: common.grayColor}]}>
                      {this.props.data.truckType.map((truck,  key) => {
                        return (
                          <TouchableOpacity style={{flex:1, borderBottomWidth: 1, borderBottomColor: common.grayColor, height: 40, justifyContent: 'center'}} key={key} onPress={() => this.chooseTrailer(truck.name)}><Text style={{marginHorizontal: 10}}>{truck.name}</Text></TouchableOpacity>
                        )
                      })}
                  </View>
                }
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
                ?<TouchableHighlight onPress={() => this.onSignUp()} underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor}]}>
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

/* Map state to props */
function mapStateToProps(state){
    return {
        auth: state.auth,
        data: state.LoginReducer
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            signUpRequest,
            getAllTruckTypes
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
