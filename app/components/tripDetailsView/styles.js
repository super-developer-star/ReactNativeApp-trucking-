import { StyleSheet , Dimensions } from 'react-native';
import common from './../../config/common.js';

let window = Dimensions.get("window");

export default StyleSheet.create({
  ScreenContainer : {
    backgroundColor : 'white',
    borderRadius : 2,
    marginTop : 10
  },
  arrowUp: {
    width: 13,
    height: 8,
    marginRight: 20
  },
  dot: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderColor: '#A5DB03',
    borderRadius: 12/2,
    marginTop: 6,
    marginLeft: 29,
    marginBottom:2
  },
  dotted_line: {
    marginLeft: 34,
    marginTop:2,
    marginBottom:1,
    width:2,
    height:14
  },
  pin: {
    marginLeft: 31,
    height: 16,
    width: 10,
    marginTop: 3
  }

})
