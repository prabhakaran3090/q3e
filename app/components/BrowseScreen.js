
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { SBHeaderStyle, headerProp } from '../config/Config';

export default class BrowseScreen extends Component {
 
 static navigationOptions = ({ navigation }) =>  headerProp(navigation);

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Browse</Text>
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
