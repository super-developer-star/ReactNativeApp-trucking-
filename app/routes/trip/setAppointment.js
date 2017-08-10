import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,ScrollView,Dimensions,TouchableOpacity,Modal} from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import TripOverviewFullView from './../../components/tripOverviewFullView/tripOverviewFullView.js';
import MessageView from './../../components/messageView/messageView.js';
// import { Components } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';


let self;
let window = Dimensions.get("window");
export default class SetAppointment extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
       pickUpIsDateTimePickerVisible: false,
       pickUpDate:'',
       pickUpMeridiemTime:'am',
       pickUpMeridiemTimeModal:false,
       pickUpTimeZone:'PST',
       pickUpTimeZoneModal:false,
    }
    this._onPressOptionPickUp = this._onPressOptionPickUp.bind(this);

  }
 _handleDatePicked = (date) => {
    // console.log('A date has been picked: ', date);

     this.setState({pickUpIsDateTimePickerVisible:false});
     //this.setState({pickUpDate:date});
   };
  _hideDateTimePicker = () => this.setState({pickUpIsDateTimePickerVisible:false});
  _onPressOptionPickUp(){
      this.setState({pickUpMeridiemTimeModal : false})
      this.setState({pickUpTimeZoneModal : false})
    }
  render(){
    const { navigate,goBack } = this.props.navigation;
    return (

      <View style={commonStyle.container}>

      <View style={[commonStyle.headerBarHeight90,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <View style={{flex:1}}>
        <View style={{marginTop :22,paddingLeft:23}}>
            <Text style={[commonStyle.fontSize_20,{color:common.whiteColor}]}>Set Appointment</Text>
        </View>
      </View>
        <View style={[{flex:1, marginTop : 25,marginRight :20},commonStyle.contentRight]}>
          <View style={[styles.oval,commonStyle.contentCenter]}>
              <Text style={[commonStyle.fontSize_12,styles.fontMullerRegular,{color:common.whiteColor,textAlign:'right',textDecorationLine:'underline'}]}>Cancel</Text>
          </View>
        </View>
      </View>

      <View style={{height:window.height-160}}>
       <ScrollView>

            <View style={{marginLeft:30,marginRight:30}}>
              <View style={{marginTop:27}}>
                  <Text style={[commonStyle.fontSize_12,styles.fontProximaNovaBold,{color:common.blackColor,textAlign:'left',fontWeight:'600'}]}>PICKUP</Text>
                  <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}>ABC Solutions</Text>
                  <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}>(123) 456-7890</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={[commonStyle.fontSize_12,styles.fontProximaNovaBold,{color:common.blackColor,textAlign:'left',fontWeight:'600'}]}>REF# </Text>
                    <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}> 123456789XYZ</Text>
                  </View>
              </View>
              <View style={{marginTop:20}}>
              <View style={commonStyle.paddingBottom_16}>
                  <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>SELECT A DATE</Text>
                  <View style={styles.textInputParent}>
                      <TouchableOpacity onPress={() => { this.setState({pickUpIsDateTimePickerVisible:true}) }} >
                          <View style={{flexDirection:'row'}}>
                            <View>
                                <Text style={{height:40,width:window.width - 95,paddingLeft:12,paddingTop:9}}>{this.state.pickUpDate}</Text>
                            </View>
                            <View>
                            <Image
                                style={{marginTop :8,height:24,width:24}}
                                source={images.calendar_icon}
                              />
                            </View>
                          </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                       <DateTimePicker
                          titleIOS='Select a date'
                          mode="date"
                         isVisible={this.state.pickUpIsDateTimePickerVisible}
                         onConfirm={this._handleDatePicked}
                         onCancel={this._hideDateTimePicker}
                       />
                     </View>
                </View>
                <View style={commonStyle.paddingBottom_16}>
                    <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>SELECT A TIME</Text>
                  <View style={{flexDirection:'row'}}>
                    <TextInput
                      underlineColorAndroid = "transparent"
                      keyboardType='numeric'
                      placeholder = '00'
                      maxLength = {2}
                      style={[styles.txtInputStyle,{width :50}]}
                      />
                      <View><Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold,{color:common.blackColor,marginRight:8,marginTop:10,marginLeft:8}]}>:</Text></View>
                      <TextInput
                        underlineColorAndroid = "transparent"
                        keyboardType='numeric'
                        placeholder = '00'
                        maxLength = {2}
                        style={[styles.txtInputStyle,{width :50,height:40}]}
                        />

                        <View style={[styles.textInputParent,{marginLeft:20}]}>
                          <TouchableOpacity onPress={() => { this.setState({pickUpMeridiemTimeModal:true}) }} >
                              <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text style={{height:40,width:55,paddingLeft:12,paddingTop:9}}>{this.state.pickUpMeridiemTime}</Text>
                                </View>
                                <View>
                                <Image
                                    style={{marginTop :16,marginRight:10}}
                                    source={images.Arrow_Down}
                                  />
                                </View>
                              </View>
                          </TouchableOpacity>
                          </View>

                          <View style={[styles.textInputParent,{marginLeft:15}]}>
                            <TouchableOpacity onPress={() => { this.setState({pickUpTimeZoneModal:true}) }} >
                              <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text style={{height:40,width:55,paddingLeft:12,paddingTop:12}}>{this.state.pickUpTimeZone}</Text>
                                </View>
                                <View>
                                <Image
                                    style={{marginTop :16,marginRight:10}}
                                    source={images.Arrow_Down}
                                  />
                                </View>
                              </View>
                              </TouchableOpacity>
                            </View>


                    </View>
                </View>
                </View>
            </View>


            <View style={{borderTopWidth:1,borderTopColor:common.grayColor,bottom:0,marginTop:10}}>
            </View>


            <View style={{marginLeft:30,marginRight:30}}>
              <View style={{marginTop:27}}>
                  <Text style={[commonStyle.fontSize_12,styles.fontProximaNovaBold,{color:common.blackColor,textAlign:'left',fontWeight:'600'}]}>DROP OFF</Text>
                  <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}>ABC Solutions</Text>
                  <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}>(123) 456-7890</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={[commonStyle.fontSize_12,styles.fontProximaNovaBold,{color:common.blackColor,textAlign:'left',fontWeight:'600'}]}>REF# </Text>
                    <Text style={[commonStyle.fontSize_14,{color:common.grayTextColor,textAlign:'left'}]}> 123456789XYZ</Text>
                  </View>
              </View>
              <View style={{marginTop:20}}>
              <View style={commonStyle.paddingBottom_16}>
                  <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>SELECT A DATE</Text>
                  <View style={styles.textInputParent}>
                      <TouchableOpacity onPress={() => { this.setState({pickUpIsDateTimePickerVisible:true}) }} >
                          <View style={{flexDirection:'row'}}>
                            <View>
                                <Text style={{height:40,width:window.width - 95,paddingLeft:12,paddingTop:9}}>{this.state.pickUpDate}</Text>
                            </View>
                            <View>
                            <Image
                                style={{marginTop :8,height:24,width:24}}
                                source={images.calendar_icon}
                              />
                            </View>
                          </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                       <DateTimePicker
                          titleIOS='Select a date'
                          mode="date"
                         isVisible={this.state.pickUpIsDateTimePickerVisible}
                         onConfirm={this._handleDatePicked}
                         onCancel={this._hideDateTimePicker}
                       />
                     </View>
                </View>
                <View style={commonStyle.paddingBottom_16}>
                    <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6,styles.fontOswaldRegular]}>SELECT A TIME</Text>
                  <View style={{flexDirection:'row'}}>
                    <TextInput
                      underlineColorAndroid = "transparent"
                      keyboardType='numeric'
                      placeholder = '00'
                      maxLength = {2}
                      style={[styles.txtInputStyle,{width :50}]}
                      />
                      <View><Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold,{color:common.blackColor,marginRight:8,marginTop:10,marginLeft:8}]}>:</Text></View>
                      <TextInput
                        underlineColorAndroid = "transparent"
                        keyboardType='numeric'
                        placeholder = '00'
                        maxLength = {2}
                        style={[styles.txtInputStyle,{width :50,height:40}]}
                        />

                        <View style={[styles.textInputParent,{marginLeft:20}]}>
                          <TouchableOpacity onPress={() => { this.setState({pickUpMeridiemTimeModal:true}) }} >
                              <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text style={{height:40,width:55,paddingLeft:12,paddingTop:9}}>{this.state.pickUpMeridiemTime}</Text>
                                </View>
                                <View>
                                <Image
                                    style={{marginTop :16,marginRight:10}}
                                    source={images.Arrow_Down}
                                  />
                                </View>
                              </View>
                          </TouchableOpacity>
                          </View>

                          <View style={[styles.textInputParent,{marginLeft:15}]}>
                            <TouchableOpacity onPress={() => { this.setState({pickUpTimeZoneModal:true}) }} >
                              <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text style={{height:40,width:55,paddingLeft:12,paddingTop:12}}>{this.state.pickUpTimeZone}</Text>
                                </View>
                                <View>
                                <Image
                                    style={{marginTop :16,marginRight:10}}
                                    source={images.Arrow_Down}
                                  />
                                </View>
                              </View>
                              </TouchableOpacity>
                            </View>


                    </View>
                </View>
                </View>
            </View>


          </ScrollView>
        </View>





      <View style={{borderTopWidth:1,borderTopColor:common.grayColor,bottom:0}}>
      </View>
      <TouchableHighlight underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.contentCenter,{backgroundColor:common.greenColor,position : 'absolute', bottom : 10,left:10,height:50,width:window.width-20}]}>
        <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>ACCEPT SHIPMENT</Text>
      </TouchableHighlight>


      <Modal
      animationType={"slide"}
      transparent={true}
      visible={this.state.pickUpMeridiemTimeModal}
      >
     <View style={[styles.optionView,commonStyle.contentCenter]}>
        <View style={[styles.moreOption,{borderRadius :10}]}>

            <TouchableOpacity onPress={this._onPressOptionPickUp} activeOpacity={0.2} style={[commonStyle.contentCenter,styles.borderBottom2,{height : 57}]}>
                <Text style={styles.optionFont2}>am</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._onPressOptionPickUp} activeOpacity={0.2} style={[commonStyle.contentCenter,{height : 57}]}>
                <Text style={styles.optionFont2}>pm</Text>
            </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={() => this.setState({pickUpMeridiemTimeModal : false})} activeOpacity={0.2} style={[commonStyle.contentCenter, styles.cancelView,{borderRadius : 10}]}>
            <Text style={styles.optionFont}>Cancel</Text>
        </TouchableOpacity>
     </View>
    </Modal>

    <Modal
    animationType={"slide"}
    transparent={true}
    visible={this.state.pickUpTimeZoneModal}
    >

    <View style={[styles.optionView,commonStyle.contentCenter]}>
      <View style={[styles.moreOption,{borderRadius :10}]}>

          <TouchableOpacity onPress={this._onPressOptionPickUp} activeOpacity={0.2} style={[commonStyle.contentCenter,styles.borderBottom2,{height : 50}]}>
              <Text style={styles.optionFont2}>PST</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressOptionPickUp} activeOpacity={0.2} style={[commonStyle.contentCenter,{height :50}]}>
              <Text style={styles.optionFont2}>IST</Text>
          </TouchableOpacity>

      </View>

      <TouchableOpacity onPress={() => this.setState({pickUpTimeZoneModal : false})} activeOpacity={0.2} style={[commonStyle.contentCenter, styles.cancelView,{borderRadius :10}]}>
          <Text style={styles.optionFont}>Cancel</Text>
      </TouchableOpacity>


    </View>
    </Modal>
      </View>

    )
  }
  //************************************** Render end*****************************//
};
