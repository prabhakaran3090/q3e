
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CalendarScreen extends Component {
  static navigationOptions = { 
    header: null,  
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Calendar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
