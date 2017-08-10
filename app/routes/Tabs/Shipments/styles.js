import { StyleSheet, Dimensions } from 'react-native';
let window = Dimensions.get("window");
let { height, width } = window;
import { getSize} from './../../../layouts/common/RatioCalculator/ratio';


export default {
  topContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  toAndFromWrapper: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  topWrapper: {
    flex:1,
    justifyContent: 'center'
  },
  toAndFromContainer: {
    paddingTop: getSize(5),
  },
  wrapper: {
    height: getSize(60),
    width: width,
    // borderBottomLeftRadius: 2,
    // borderBottomRightRadius: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: getSize(30)
  },
  hr: {
    height: 1,
    width: width,
    backgroundColor: '#D1D3D4',
  },
  heading: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000'
  },
  subText: {
    fontSize: 14,
    color: '#58595B',
  },
  subHeading: {
    height: getSize(30),
    fontSize:getSize(18),
    color: '#FF0033'
  }

};
