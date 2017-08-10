import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
// import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import LocationAndTime from './../LocationAndTime/LocationAndTime';
import images from '../../../config/images.js';

export default class ToAndFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reduceWidth = 0 , borderRadius, arrowType } = this.props;
    return (
      <View style={styles.wrapper(reduceWidth, borderRadius)}>
        <View style={styles.arrowContainer(reduceWidth)}>
        {arrowType != 'none' &&
          <Image
            source={arrowType}
          />
        }
        </View>
        <Grid>
          <Col style={{ width: 61 - reduceWidth/2}}>
            <View style={styles.dotLineAndPin(reduceWidth)}>
              <View style={[styles.dot, this.props.color && styles.borderColorRed]}/>
                <View style={styles.dottedLine}>
                  <Image
                    source={images.dotted_line}
                    style={styles.dottedLineImage}
                  />
                  <Image
                    source={images.dotted_line}
                    style={styles.dottedLineImage}
                  />
                </View>
                {this.props.color ?
                  <FontAwesome name="map-marker" style={{color:this.props.color}} size={18}/>:
                  <Image
                    source={images.pin}
                    style={[styles.pin]}
                  />
                }
            </View>
          </Col>
          <Col>
            <LocationAndTime
              location="Los Angeles, California"
              date="Aug 1, 2017"
              timeInterval="12:00 am - 4:00 am"
              phoneNumber="(123) 456 - 7890"
            />
            <LocationAndTime
              location="Las Vegas, Nevada"
              date="Aug 2, 2017"
              timeInterval="7:00 pm - 9:00 pm"
              phoneNumber="(123) 456 - 7890"
            />
          </Col>
        </Grid>
      </View>
    )
  }
}
