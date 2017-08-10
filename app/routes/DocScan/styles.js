import {
  StyleSheet,
  Dimensions
} from 'react-native';

let window = Dimensions.get("window");
import { getSize} from './../../layouts/common/RatioCalculator/ratio';

export default StyleSheet.create({
    Container: {
      flex:1,
      // backgroundColor: 'white'
    },
    Content: {
      flex:1,
      width:window.width,
      // backgroundColor: 'rgba(235,235,235,1)'
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
    },
    /////////////////////
    DocContainer: {
    marginTop: getSize(15),
    marginHorizontal: getSize(16),
    height: getSize(window.width == 320 ? 472 : 484),
    borderWidth: 1,
    borderColor: '#AEAFB1'
  },
  ButtonContainer: {
    marginHorizontal: getSize(9),
    marginBottom: getSize(10),
    marginTop: getSize(18),
    flex:1,
    flexDirection:'row'
  },
  FirstButtonContainer: {
    flex:1,
    height: getSize(50),
    backgroundColor:'#000000',
    marginRight: getSize(10)
  },
  FirstButtonText: {
    textAlign:'center',
    color: '#FFFFFF',
    marginVertical: getSize(16),
    fontSize: getSize(14),
    fontWeight:'bold',
    lineHeight: getSize(20)
  },
  SecondButtonContainer: {
    height: getSize(50),
    flex:1,
    backgroundColor: '#A5DB03'
  },
  SecondButtonText: {
    textAlign:'center',
    color: '#FFFFFF',
    marginVertical: getSize(16),
    fontSize: getSize(14),
    fontWeight:'bold',
    lineHeight: getSize(20)
  },
  scanner: {
    flex: 1,
    width: window.width - getSize(40),
    height: getSize(447),
    borderColor: 'orange',
    borderWidth: 1
  },
  CapturedImage: {
    flex: 1,
    width: window.width - getSize(32),
    height: getSize(window.width == 320 ? 472 : 484)
  }
});
