import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput,Dimensions } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';

let self;
let window = Dimensions.get("window");
class MessageView extends Component {
  constructor(props){
    super(props);

    self= this;

    this.state = {

    }


  }

  render(){
    let {data} = this.props;
    return (
      <View>
        <View style={{marginBottom:30}}>
            <View>
                <Text style={[styles.message_FontSize_12,{fontWeight:'600'}]}>
                  {data.subject}
                </Text>
            </View>
            <View style={{paddingTop:5}}>
                <Text style={[styles.message_FontSize_14]}>
                {data.message}
                </Text>
            </View>

          <View style={[styles.flexDirectionRow,{paddingTop:5}]}>
              <Text style={[styles.message_FontSize_12]}>{data.time}</Text>
          </View>

        </View>

    </View>
    )
  }
}

export default MessageView;
