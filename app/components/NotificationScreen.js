
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NotificationScreen extends Component {
  static navigationOptions = ({ navigation }) => {  
    return({
        title: 'Notification', 
        headerLeft: null,
        headerTitleStyle :{
          alignSelf: 'center'
        }        
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Notification</Text>
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
