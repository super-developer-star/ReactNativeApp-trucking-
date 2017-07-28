import {
  StyleSheet,
  Dimensions
} from 'react-native';

let window = Dimensions.get("window");
import { getSize} from './../../layouts/common/RatioCalculator/ratio';

export default StyleSheet.create({
    Container: {
      flex:1,
      backgroundColor: 'white'
    },
    Content: {
      flex:1,
      width:window.width,
      backgroundColor: 'rgba(235,235,235,1)'
    },
    CameraWrapper: {
      height: getSize(447),
      backgroundColor: 'black',
      marginTop: getSize(20),
      marginHorizontal: getSize(20),
    },
    CameraTake: {
      alignItems: 'center',
      bottom: getSize(40)
    },
    Image: {
      height: getSize(80),
      width: getSize(80)
    }
});
