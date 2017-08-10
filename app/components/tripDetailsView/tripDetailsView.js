import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,Dimensions } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get('window');

export default class TripDetailsView extends Component {
  constructor(props) {
    super(props);
    self = this;


    this.state = {

  }
}

 render() {
    let { dataTripDetails } = this.props;

   return (
      <TouchableHighlight>
      <View style={styles.ScreenContainer}>

     <View style={[{marginTop : 19},commonStyle.contentRight]}>


      </View>

     <View style={{flexDirection :'row'}}>
        <View style={{width: 61}}>
        <Grid style={{}}>
          <Col>
            <View style={styles.dot}/>
            <Image
              source={images.dotted_line}
              style={styles.dotted_line}
            />
            <Image
              source={images.dotted_line}
              style={styles.dotted_line}
            />
            <Image
              source={images.pin}
              style={styles.pin}
            />
          </Col>

        </Grid>

        </View>
        <View>
          <View>
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{dataTripDetails.pickupCity + ', ' + dataTripDetails.pickupState}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{new Date(dataTripDetails.pickupDateTimeFrom).toLocaleString()}</Text>
          </View>
          <View style={{marginTop :15}}>
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{dataTripDetails.deliveryCity + ', ' + dataTripDetails.deliveryState}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{new Date(dataTripDetails.deliveryDateTimeTo).toLocaleString()}</Text>
          </View>
        </View>
      </View>

     <View style={{marginTop :20,borderTopWidth : 1, borderTopColor : common.grayColor}}>
        <View style={{flexDirection : 'row',marginTop :25,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{'DEADHEAD'}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.deadhead || 0}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{'PRICE'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.lowPrice}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12]}>{'DISTANCE'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.distance + 'mi'}</Text>
            </View>
        </View>

        <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{'COMMODITY'}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.loadingDetails.commodity}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{'REFERENCE #'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.referenceValue || 'NA'}</Text>
            </View>
            <View style={{flex:1}}>
            </View>
        </View>
        <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{'WEIGHT'}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.loadingDetails.weight}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{'PALLETS'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.loadingDetails.pallets}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12]}>{'TRAILER'}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.truckType}</Text>
            </View>
        </View>
      </View>

     </View>
      </TouchableHighlight>
    )
  }
}
