import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,ScrollView,Dimensions,Modal} from 'react-native';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';

import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import TripDetailsView from './../../components/tripDetailsView/tripDetailsView.js';

/* Actions */
import { acceptShipment } from './../../actions/shipments';

/* Mapbox */
import Mapbox, { MapView, Annotation } from 'react-native-mapbox-gl';
import accessToken from './../../utils/AccessToken';
Mapbox.setAccessToken(accessToken);

/* data to simulate real time mapping */
// const data = [
//   { latitude: 34.0527, longitude: -118.2442},
//   { latitude: 34.0532, longitude: -118.2435},
//   { latitude: 34.0537, longitude: -118.2452},
//   { latitude: 34.0527, longitude: -118.2457},
//   { latitude: 34.0523, longitude: -118.2462},
// ]


/* Pubnub */
import { Publish } from '../../services/pubnub.js';
import { Subscribe } from '../../services/pubnub.js';

// import {HTTP} from '../../utils/HTTP';
// import { AsyncStorage } from 'react-native';


let self;
let window = Dimensions.get("window");
const coordinates = {
  latitude: -36.8457991,
  longitude: 174.7666099,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
class TripDetails extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;

    this.state = {
      // shipment: this.props.shipment,
      shipment: {
          shipmentID: 1,
          driverId: 'a',
          pickupLocationLat : 34.0537,
          pickupLocationLong : -118.2452,
          deliveryLocationLat : 34.0523,
          deliveryLocationLong : -118.2462,
          driverCurrentLatLong : [34.0527,-118.2442],
          Status: "ENROUTE_TO_PICKUP"
      },
      centerCoordinate: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
      annotations:[{
        coordinates: [[34.0522, -118.2437]],
        type: 'polyline',
        strokeColor: '#00FF00',
        strokeWidth: 2,
        id: 'driver path'
      }],
      zoom : 16,
      tripConfirmModal : false,
      requestInProgress: false,
      shipmentAcceptFailed: false
    };
    this.acceptShipment = this.acceptShipment.bind(this);
    this.setTripConfirmModalVisible = this.setTripConfirmModalVisible.bind(this);

  }

  setTripConfirmModalVisible(visible) {
      this.setState({tripConfirmModal: visible});
  }
  acceptShipment(shipmentId){
      if(!this.state.requestInProgress){
          this.setState({requestInProgress: true});
          (this.props.actions.acceptShipment(shipmentId))
              .then(function(response){
                console.log("resonse in component: ", response);
                  self.setTripConfirmModalVisible(!self.state.tripConfirmModal);
                  self.setState({requestInProgress: false});
                  self.props.navigation.navigate('PickUpLocation');
              })
              .catch(function(error){
                  console.log("error in component: ", error);
                  self.setState({requestInProgress: false, shipmentAcceptFailed: true});
                  // TODO: any processing
              });
      }
  }

  addAnnotations = (location) => {
    let coordinateElement = [[location[0], location[1]]];
    let newCoordinates    = this.state.annotations[0].coordinates.concat(coordinateElement);
    console.log('annotations', newCoordinates);
    this.setState({
      annotations: [{
        coordinates: newCoordinates,
        type: 'polyline',
        strokeColor: '#00FF00',
        strokeWidth: 2,
        id: 'driver path'
      }]
    });
  }

  publishUpdatedShipment = (position) => {
      const { shipment } = this.state;
  
      let updatedShipment;
      if(position.latitude === shipment.pickupLocationLat && position.longitude === shipment.pickupLocationLong){
        updatedShipment = Object.assign({}, shipment, {driverCurrentLatLong:[position.latitude, position.longitude], Status:"PICKED_UP"})
      } else if(shipment.Status === "PICKED_UP" && position.latitude != shipment.deliveryLocationLat) {
        updatedShipment = Object.assign({}, shipment, {driverCurrentLatLong:[position.latitude, position.longitude], Status:"ENROUTE_TO_DELIVERY"})
      } else if(position.latitude === shipment.deliveryLocationLat && position.longitude === shipment.deliveryLocationLong){
        updatedShipment = Object.assign({}, shipment, {driverCurrentLatLong:[position.latitude, position.longitude], Status: "DELIVERED"})
      } else {
        updatedShipment = Object.assign({}, shipment, {driverCurrentLatLong:[position.latitude, position.longitude], Status: "ENROUTE_TO_PICKUP"})
      }

      Publish(updatedShipment, shipment.driverId);
  }

  // clear = (myVar) => {
  //   clearInterval(myVar);
  // }

  // componentDidMount(){
  //   let num = 0;
  //   let myVar = setInterval(() => {
  //       this.publishUpdatedShipment(data[num]);
  //       num++;
  //       if(num === 5){
  //         this.clear(myVar);
  //       }
  //   }, 5000)
  // }

componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
        this.publishUpdatedShipment(position.coords);
      })
  }

componentWillMount(){
      (Subscribe(this.props.shipment.driverId)).then(response => {
        console.log('published shipment', response);
        this.setState({
          shipment : response,
        });
        this.addAnnotations(response.driverCurrentLatLong);
      })
  }

componentDidUpdate(){
      (Subscribe(this.props.shipment.driverId)).then(response => {
        console.log('published shipment', response);
        this.setState({
          shipment : response,
        });
        this.addAnnotations(response.driverCurrentLatLong);
      })
  }

// componentWillMount(){
//       // if owner
//         (Subscribe()).then(response => {
//           console.log('first published message', response);
//           this.setState({
//             driverCurrentLocation: response
//           });
//           this.addAnnotations(response);
//         })
//   }

//   componentDidUpdate(){
//       (Subscribe()).then(response => {
//         console.log('published message', response);
//         let changedCenterCoordinate = {
//           latitude: (this.state.centerCoordinate.latitude + response.latitude)/2,
//           longitude: (this.state.centerCoordinate.longitude + response.longitude)/2,
//         }
//         this.setState({
//           driverCurrentLocation: response,
//           centerCoordinate: changedCenterCoordinate,
//         });
//         this.addAnnotations(response);
//       })
//   }
  
  render(){
    const { navigate,goBack }  = this.props.navigation;
    const { shipment }         = this.state;
    return (

      <View style={commonStyle.container}>
      <View style={{height:300}}>
        <MapView
            ref={map => { this._map = map; }}
            style={{flex:1}}
            initialCenterCoordinate={{latitude:34.0532, longitude:-118.2450}}
            initialZoomLevel={this.state.zoom}
            initialDirection={0}
            rotateEnabled={false}
            scrollEnabled={true}
            zoomEnabled={true}
            showsUserLocation={true}
            userLocationVisible={true}
            styleURL={Mapbox.mapStyles.streets}
            userTrackingMode={Mapbox.userTrackingMode.none}
            annotations={this.state.annotations}
          >
          <Annotation
            id="initialPosition"
            coordinate={this.state.centerCoordinate}
            style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
          >
            <View style={{width: 100, height: 100, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.Pin_Map} />
              <Text>{"truck company"}</Text>
            </View>
          </Annotation>
           <Annotation
            id="driverCurrentLocation"
            coordinate={{latitude: shipment.driverCurrentLatLong[0], longitude: shipment.driverCurrentLatLong[1]}}
            style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
          >
            <View style={{width: 100, height: 100, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.Truck} />
              <Text>{shipment.Status}</Text>
            </View>
          </Annotation>
          <Annotation
            id="pickupLocation"
            coordinate={{latitude: shipment.pickupLocationLat, longitude: shipment.pickupLocationLong}}
            style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
          >
            <View style={{width: 100, height: 100, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.Pin_Menu} />
            </View>
          </Annotation>
          <Annotation
            id="deliveryLocation"
            coordinate={{latitude: shipment.deliveryLocationLat, longitude: shipment.deliveryLocationLong}}
            style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
          >
            <View style={{width: 100, height: 100, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={images.Pin_Menu} />
            </View>
          </Annotation> 
        </MapView>


        <View style={[commonStyle.headerBarHeight,{flexDirection : 'row',position:'absolute',top:1}]}>
          <View style={{flex:0.5}}>
          <TouchableHighlight onPress={() =>goBack() } underlayColor="transparent" style={[{width : 60,height : 50,marginTop :22},commonStyle.contentCenter]}>
            <Image
              style={{width : 21, height : 18}}
              source={images.Back_Arrow}
            />
          </TouchableHighlight>
          </View>
          <View style={[{flex:3,marginTop:25}]}>
            <Text style={[commonStyle.fontSize_16,{color:common.whiteColor,fontWeight: 'bold'}]}></Text>
          </View>
        </View>
      </View>

        <View style={{flex:1}}>

          {/*<TripDetailsView dataTripDetails={selectedShipment}/>*/}


        </View>
      <View style={{borderTopWidth:1,borderTopColor:common.grayColor,bottom:110}}>
          <TouchableHighlight underlayColor="transparent" onPress={() => navigate('TripMessage')} >
          <View style={[commonStyle.subContainer,{paddingTop:20,flex:1}]}>
            <Text style={[commonStyle.fontSize_12,{color:common.blackColor,fontWeight: '600',paddingLeft:10}]}>MESSAGES (4)</Text>
            <Image
              style={{position:'absolute',right:15,top:20}}
              source={images.Arrow_Right}
            />
          </View>
        </TouchableHighlight>
      </View>
      <View style={{borderTopWidth:1,borderTopColor:common.grayColor,bottom:70}}>
      </View>
      <TouchableHighlight  onPress={() => { this.setTripConfirmModalVisible(true) }}  underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.subContainer,styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,bottom:10}]}>
        <Text style={[commonStyle.fontSize_14,{fontWeight:'bold',fontFamily:'ProximaNova-Bold'}]}>ACCEPT SHIPMENT</Text>
      </TouchableHighlight>

      <Modal
         animationType={"slide"}
         transparent={true}
         visible={this.state.tripConfirmModal}
         style={{}}
         onRequestClose={()=>{}}
         >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
          <View style={{height:160,width:window.width,backgroundColor:common.whiteColor,position:'absolute',bottom:0}}>
              {
                  (this.state.shipmentAcceptFailed)?
                      <View>
                        <View style={{paddingTop:20,paddingHorizontal:50}}>
                          <Text style={[commonStyle.fontSize_20,{fontWeight:'500',textAlign:'center'}]}>
                            Sorry there's something wrong
                          </Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:20,height:50}}>
                        <TouchableHighlight  onPress={() => { this.setTripConfirmModalVisible(!this.state.tripConfirmModal) }}  underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.subContainer,styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,bottom:10}]}>
                          <Text style={[commonStyle.fontSize_14,{fontWeight:'bold',fontFamily:'ProximaNova-Bold'}]}>BACK</Text>
                        </TouchableHighlight>
                        </View>
                      </View>
                      :
                      <View>
                        <View style={{paddingTop:20,paddingHorizontal:50}}>
                          <Text style={[commonStyle.fontSize_20,{fontWeight:'500',textAlign:'center'}]}>
                            Are you sure you want to accept this load?
                          </Text>
                        </View>
                        <View style={{flex:1,marginHorizontal:10}}>
                          <View>
                            <View style={{flexDirection:'row',marginTop:20,height:50}}>
                              <TouchableHighlight onPress={() => {  this.setTripConfirmModalVisible(!this.state.tripConfirmModal)}} underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.contentCenter,{backgroundColor:common.blackColor,flex:0.5,marginRight:5}]}>
                                <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>NO</Text>
                              </TouchableHighlight>

                              <TouchableHighlight onPress={() => this.acceptShipment(selectedShipment._id)}  underlayColor={common.tuchableUnderlayGreenColor} style={[commonStyle.contentCenter,{backgroundColor:common.greenColor,flex:0.5}]}>
                                <Text style={[commonStyle.fontSize_14,styles.fontProximaNovaBold]}>YES</Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </View>
              }
         </View>
        </View>
       </Modal>


      </View>
    )
  }
  //************************************** Render end*****************************//
};

/* Map state to props */
function mapStateToProps(state){
    return {
        shipment: state.shipments.selectedShipment,
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            acceptShipment
        }, dispatch)
    };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)
