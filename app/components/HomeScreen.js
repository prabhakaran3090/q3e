
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {  
    return({
        title: 'Q3E',  
        drawerLabel: 'Home',
        drawerIcon: (props) => <MaterialIcons
                      name="home"
                      size={24}
                      style={{ color: props.tintColor }}
                    />,  
        headerLeft: <TouchableHighlight onPress={() => { navigation.navigate('DrawerOpen') }}><Icon name='bars'  size={25} style={{color: 'white',marginLeft:20}}/></TouchableHighlight>,
        headerRight: <Icon name='ellipsis-v'  size={25} style={{color: 'white',marginRight:20}}/>, 
        headerStyle:{
          backgroundColor: '#32313F', 
           height: 80,
          paddingTop: StatusBar.currentHeight, 
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F3E4E',
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
  icon:{
    flex:1
  }
});
