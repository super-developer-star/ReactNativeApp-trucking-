import { StyleSheet, Dimensions } from 'react-native';
let window = Dimensions.get("window");
let { height, width } = window;

import common from '../../../config/common';

export default {
  wrapper: {
    width: width,
    backgroundColor: '#000000',
    height: 50,
  },
  progressTextContainer: function(progressValue) {
    return {
      flex: 1,
      width: width - progressValue,
      backgroundColor: common.greenColor,
    }
  },
  pickUpInProgress: {
    color: '#FFFFFF',
    fontSize: 20,
    backgroundColor:common.greenColor,
    fontWeight: '500',
    marginLeft: 20,
    height:50,
    paddingTop: 10,
    position: 'absolute'
  }
};
