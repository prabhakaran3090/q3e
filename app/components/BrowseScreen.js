
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

export default class BrowseScreen extends Component {
 static navigationOptions = ({ navigation }) => {  
    return({
        title: 'Q3E', 
        drawerLabel: null,
        drawerIcon: <Image
                        style={styles.stretch}
                        source={require('../assets/images/logo.png')}
                      />,  
        headerLeft: <TouchableHighlight onPress={() => { navigation.navigate('DrawerOpen') }}><Icon name='bars'  size={25} style={{color: 'white',marginLeft:20}}/></TouchableHighlight>,
        headerRight: <Icon name='ellipsis-v'  size={25} style={{color: 'white',marginRight:20}}/>, 
        headerStyle:{
          backgroundColor: '#32313F',  
        }, 
        headerTitleStyle :{
          alignSelf: 'center',
          color: 'white'
        }, 
      })
    };
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
