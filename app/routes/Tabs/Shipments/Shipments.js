import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, TouchableHighlight} from 'react-native';
let window = Dimensions.get("window");
let { height, width } = window;
import ToAndFrom from './../../../layouts/common/ToAndFrom/ToAndFrom';

import styles from './styles';
import Tabs from './../../../components/Tabs/Tabs.js';
import commonStyle from './../../../config/commonStyle.js';
import common from './../../../config/common';

import Header from './../../../layouts/common/Header/Header';
import TopNavigationSection from './../../../layouts/common/TopNavigationSection/TopNavigationSection';
import ToAndFromFooter from './../../../layouts/common/ToAndFromFooter/ToAndFromFooter';
import MessageView from './../../../components/messageView/messageView.js';


export default class UpcomingShipment extends Component {
  constructor(props){
    super(props);

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
    }];
    this.state = {
      message,
      screen: 'LIVE'
    }
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen(screen) {
      this.setState({screen});
  }

  render(){
    const { navigate, state, goBack } = this.props.navigation;
    return (
      <View style={styles.topContainer}>
        <Header title="Shipments"  goBack={goBack}/>
        <TopNavigationSection changeScreen={this.changeScreen} />
        <ScrollView>
          <View style={styles.toAndFromContainer}>
            <ToAndFrom reduceWidth={20} borderRadius={[2,2,0,0]} arrowType={'none'}/>
            <View style={styles.hr}/>
              {this.state.screen === "UPCOMING" ||  this.state.screen === "PAST"?
                <View style={{backgroundColor: '#FFFFFF'}}>
                    {this.state.screen === "UPCOMING" ?
                      <View style={styles.wrapper}>
                        <View style={{flex:1}}>
                          <Text style={styles.heading}>DEADHEAD</Text>
                          <Text style={styles.subText}>20mi</Text>
                        </View>
                        <View style={{flex:1}}>
                          <Text style={styles.heading}>PRICE</Text>
                          <Text style={styles.subText}>$2000</Text>
                        </View>
                        <View style={{flex:1}}>
                          <Text style={styles.heading}>DISTANCE</Text>
                          <Text style={styles.subText}>600mi</Text>
                        </View>
                    </View>:
                    <View  style={[styles.wrapper]}>
                      <View style={{flex:0.5}}>
                        <Text  style={styles.subHeading}>COMPLETED</Text>
                      </View>
                      <View style={{flex:0.5}}>
                        <Text style={[styles.subHeading, {textAlign: 'center'}]}>PAID $2000</Text>
                      </View>
                    </View>
                    }
                </View>:
                <ToAndFromFooter />
              }
            </View>
            {(this.state.screen === "UPCOMING" ||  this.state.screen === "PAST")  &&
            <View style={styles.toAndFromContainer}>
              <ToAndFrom reduceWidth={20} borderRadius={[2,2,0,0]} arrowType={'none'} color={this.state.screen === "PAST" ? '#FF0033': null}/>
              <View style={styles.hr}/>
              <View style={{backgroundColor: '#FFFFFF'}}>
                  {this.state.screen == "UPCOMING"?
                    <View style={styles.wrapper}>
                      <View style={{flex:1}}>
                        <Text style={styles.heading}>DEADHEAD</Text>
                        <Text style={styles.subText}>20mi</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Text style={styles.heading}>PRICE</Text>
                        <Text style={styles.subText}>$2000</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Text style={styles.heading}>DISTANCE</Text>
                        <Text style={styles.subText}>600mi</Text>
                      </View>
                  </View>:
                  <View  style={[styles.wrapper]}>
                    <View style={{flex:0.5}}>
                      <Text style={styles.subHeading}>FAILED</Text>
                    </View>
                    <View style={{flex:0.5}}>
                      <Text  style={[styles.subHeading, {textAlign: 'center'}]}>NOT PAID</Text>
                    </View>
                  </View>
                  }
              </View>
              </View>

            }
            {this.state.screen != 'UPCOMING' && this.state.screen != 'PAST'  &&
                <View>
                <View style={styles.hr}/>
                <View style={[{paddingTop :23.5, backgroundColor: '#FFFFFF', paddingHorizontal:20}]}>
                    <Text style={{fontSize:18, lineHeight: 20, paddingBottom:28}}>Messages (4)</Text>
                   {
                     this.state.message.map( (message, key) =>{
                       return (
                         <MessageView data ={message} key={key}/>
                       )
                     })
                   }
                 </View>
                 <View style={{position: 'relative', height: 122.5,backgroundColor: '#FFFFFF',width: window.width, bottom: 0}}>
                   <View style={{paddingTop: 10}}>
                    <View style={styles.hr}/>
                   </View>
                   <TouchableHighlight  onPress={() => navigate('PastShipment')}   underlayColor={common.tuchableUnderlayGreenColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.greenColor,bottom:0, height: 50, marginTop: 30, marginHorizontal:10}]}>
                     <Text style={[commonStyle.fontSize_14,{fontWeight:'bold',fontFamily:'ProximaNova-Bold'}]}>VIEW TRIP</Text>
                   </TouchableHighlight>
                 </View>
                </View>

            }
        </ScrollView>
        <Tabs navigate={navigate} state={state} />
      </View>
    )
  }
};
