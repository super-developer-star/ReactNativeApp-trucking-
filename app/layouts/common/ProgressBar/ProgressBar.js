import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, progressValue } = this.props;
    return (
      <View style={[styles.wrapper]}>
        <View style={styles.progressTextContainer(progressValue)} />
        <Text style={styles.pickUpInProgress}>{title}</Text>
      </View>
    )
  }
}
