
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
 
    return({
        title: 'Q3E',
        drawerLabel: 'Menu',
        headerLeft: <TouchableHighlight underlayColor='transparent' onPress={() => { navigation.navigate('DrawerOpen') }}><Icon name='bars'  size={25} style={{color: 'black',marginLeft:20}}/></TouchableHighlight>,
        headerRight: <Icon name='ellipsis-v'  size={25} style={{color: 'black',marginRight:20}}/>,
        headerTitleStyle :{
          alignSelf: 'center'
        }
    })
  };
 

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Q3E</Text>
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
