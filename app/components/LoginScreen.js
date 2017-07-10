
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props){
      super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() =>  this.props.navigation.navigate('Home') }>
          login
        </Text>
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
