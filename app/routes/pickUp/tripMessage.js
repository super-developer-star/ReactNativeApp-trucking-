import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,ScrollView,Dimensions} from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import MessageView from './../../components/messageView/messageView.js';


let self;
let window = Dimensions.get("window");
export default class TripMessage extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
      let message = [{
        subject : 'SUBJECT OF MESSAGE',
        message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis finibus mi, non accumsan neque. Nunc in dui ut neque laoreet dapibus.',
        time : 'Jul 31, 2017  |  6:38 pm'
      },{
        subject : 'SUBJECT OF MESSAGE',
        message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis finibus mi, non accumsan neque. Nunc in dui ut neque laoreet dapibus.',
        time : 'Jul 31, 2017  |  6:38 pm'
      },{
        subject : 'SUBJECT OF MESSAGE',
        message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis finibus mi, non accumsan neque. Nunc in dui ut neque laoreet dapibus.',
        time : 'Jul 31, 2017  |  6:38 pm'
      },{
        subject : 'SUBJECT OF MESSAGE',
        message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis finibus mi, non accumsan neque. Nunc in dui ut neque laoreet dapibus.',
        time : 'Jul 31, 2017  |  6:38 pm'
      },{
        subject : 'SUBJECT OF MESSAGE',
        message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis finibus mi, non accumsan neque. Nunc in dui ut neque laoreet dapibus.',
        time : 'Jul 31, 2017  |  6:38 pm'
      }]
      this.state = {
        message:message,
        feedView : {
          height: window.height - 80,
        }

      }
  }


  render(){
    const { navigate,goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight90,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <View style={{flex:0.5}}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 50,marginTop :22},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Arrow_White_Left}
          />
        </TouchableHighlight>
        </View>
        <View style={[{flex:3,marginTop:25}]}>
          <Text style={[commonStyle.fontSize_16,styles.fontProximaNovaBold,{color:common.whiteColor}]}>Messages (4)</Text>
        </View>
      </View>
         <ScrollView>
         <View style={commonStyle.subContainer}>
         <View style={[{paddingTop :30}]}>
            {
              this.state.message.map( (message) =>{
                return (
                  <MessageView data ={message}/>
                )
              })
            }
          </View>
            </View>
         </ScrollView>
      </View>


    )
  }
  //************************************** Render end*****************************//
};
