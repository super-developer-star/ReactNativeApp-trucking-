import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,Dimensions } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;
let window = Dimensions.get('window');

export default class TripOverviewFullView extends Component {
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
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{dataTripDetails.source}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.sourceAddress}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.startDate}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.sourceMobile}</Text>
          </View>
          <View style={{marginTop :15}}>
            <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>{dataTripDetails.destination}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.destinationAddress}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.endDate}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.destinationMobile}</Text>

          </View>
        </View>
      </View>

     <View style={{marginTop :20,borderTopWidth : 1, borderTopColor : common.grayColor}}>
        <View style={{flexDirection : 'row',marginTop :25,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{dataTripDetails.deadheadKey}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.deadheadValue}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{dataTripDetails.priceKey}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.priceValue}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12]}>{dataTripDetails.distanceKey}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.distanceValue}</Text>
            </View>
        </View>

        <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{dataTripDetails.commodityKey}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.commodityValue}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{dataTripDetails.referenceKey}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.referenceValue}</Text>
            </View>
            <View style={{flex:1}}>
            </View>
        </View>
        <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
            <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>{dataTripDetails.wightKey}</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.wightValue}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12,]}>{dataTripDetails.palletsKey}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.palletsValue}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={[commonStyle.fontSize_12]}>{dataTripDetails.trailerKey}</Text>
            <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>{dataTripDetails.trailerValue}</Text>
            </View>
        </View>
      </View>

     </View>
      </TouchableHighlight>
    )
  }
}
