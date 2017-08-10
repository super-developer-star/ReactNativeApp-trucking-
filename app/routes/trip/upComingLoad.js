import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,ScrollView,Dimensions,Modal} from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';
import TripOverviewFullView from './../../components/tripOverviewFullView/tripOverviewFullView.js';
import MessageView from './../../components/messageView/messageView.js';
// import { Components } from 'expo';
import { Col, Grid } from "react-native-easy-grid";

let self;
let window = Dimensions.get("window");
export default class UpComingLoad extends Component {
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
    }


  }


  render(){
    const { navigate,goBack } = this.props.navigation;
    return (

      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight,commonStyle.contentCenter,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
        <TouchableHighlight onPress={() => goBack()} underlayColor="transparent" style={[{width : 60,height : 70,marginTop :40},commonStyle.contentCenter]}>
          <Image
            style={{height:15,width:16}}
            source={images.Arrow_White_Left}
          />
        </TouchableHighlight>
        <View style={[commonStyle.smallHeaderBar]}>

        </View>
      </View>
      <View style={{backgroundColor:common.blackColor}}>
        <View style={[styles.textInputParentSearch,{marginTop:5,marginBottom:10,flexDirection:'row'}]}>
                <Text style={[commonStyle.fontSize_20,{color:common.whiteColor,lineHeight:50,paddingLeft:35,fontWeight:'500'}]}>Upcoming load for: </Text>
              <Text style={[commonStyle.fontSize_20,{color:common.greenColor,lineHeight:50,fontWeight:'500'}]}> Aug 10, 2017</Text>

          </View>
      </View>
    <View style={{marginBottom:20}}>
        <ScrollView>

        <View style={{flex:1,marginBottom:20}}>
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
                source={images.pin}
                style={styles.pin}
              />
            </Col>

          </Grid>

          </View>
          <View>
            <View>
              <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>Los Angeles, California</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>1234 John Street, 90001</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>Aug 1, 2017  •  12:00 am - 4:00 am (pt)</Text>
            </View>
            <View style={{marginTop :15}}>
              <Text style={[commonStyle.fontSize_18,{marginTop :3}]}>Las Vegas, Nevada</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>927 Casino Ave, 45900</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>Aug 2, 2017  •  7:00 pm - 9:00 pm (pt)</Text>

            </View>
          </View>
        </View>

       <View style={{marginTop :20,borderTopWidth : 1, borderTopColor : common.grayColor}}>
          <View style={{flexDirection : 'row',marginTop :25,paddingLeft : 30}}>
              <View style={{flex:1}}>
                <Text style={[commonStyle.fontSize_12]}>DEADHEAD</Text>
                <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>20mi</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12,]}>PRICE</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>$2000</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>DISTANCE</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>600mi</Text>
              </View>
          </View>

          <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
              <View style={{flex:1}}>
                <Text style={[commonStyle.fontSize_12]}>COMMODITY</Text>
                <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>Produce</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12,]}>REFERENCE #</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>1234ASD98B</Text>
              </View>
              <View style={{flex:1}}>
              </View>
          </View>
          <View style={{flexDirection : 'row',marginTop :15,paddingLeft : 30}}>
              <View style={{flex:1}}>
                <Text style={[commonStyle.fontSize_12]}>WIGHT</Text>
                <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>500kg</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12,]}>PALLETS</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>200</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={[commonStyle.fontSize_12]}>TRAILER</Text>
              <Text style={[commonStyle.fontSize_14,{fontWeight : 'normal', color : '#58595B'}]}>Reefer - 32°</Text>
              </View>
          </View>
        </View>

       </View>
          </View>
          <View style={{borderTopWidth:1,borderTopColor:common.grayColor}}>
                <Text style={[commonStyle.fontSize_18,{color:common.blackColor,fontWeight: '600',paddingLeft:30,paddingTop:20}]}>MESSAGES (4)</Text>
            </View>
            <View style={{paddingLeft:30,paddingTop:20,paddingRight:30}}>
           {
             this.state.message.map( (message) =>{
               return (
                 <MessageView data ={message}/>
               )
             })
           }
           </View>
        </ScrollView>

      </View>




      </View>
    )
  }
  //************************************** Render end*****************************//
};
