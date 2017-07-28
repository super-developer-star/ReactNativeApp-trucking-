import React ,{Component} from 'react';
import AppRoute from './app/index.js';


export default class RNApp extends Component {
    constructor(props){
      super(props);

    }

    render(){
      return <AppRoute />;
    }
}
