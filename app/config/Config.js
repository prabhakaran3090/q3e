import React, { Component } from 'react'; 
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  Constants } from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DeviceInfo from  '../core/RNDeviceInfo/';
import TopRightmenu from '../components/TopRightmenu';

const StatusBarHeaderStyle = {
    Top: 0,
    height: 60 ,
};

if(DeviceInfo.versionCompatibility() != 0){

    StatusBarHeaderStyle = {
        Top: StatusBar.currentHeight,
        height: 60 + StatusBar.currentHeight,   
    }
}

export const SBHeaderStyle = StatusBarHeaderStyle;

export const headerProp = (navigation) => {  
    return({
            headerTitle: <Image   
                            source={require('../assets/images/q3e.png')}
                            style={{ alignSelf:'center', width:40, resizeMode: 'contain'}}
                        /> ,   
            drawerLabel: 'Home',
            drawerIcon: (props) => <MaterialIcons
                                        name="home"
                                        size={24}
                                        style={{ color: props.tintColor }}
                                    />,  
            headerLeft: <TouchableHighlight  
                            underlayColor='transparent'  
                            onPress={() => { navigation.navigate('DrawerOpen') }}
                        >
                            <Icon 
                                name='bars'  
                                size={25} 
                                style={{  color: 'white',marginLeft:20}}
                            />
                        </TouchableHighlight>,
            headerRight: <TopRightmenu />,
            // <Icon name='ellipsis-v'  size={25} style={{color: 'white',marginRight:20}} />, 
            headerStyle:{
                backgroundColor: '#32313F',
                paddingTop: SBHeaderStyle.Top,
                height:  SBHeaderStyle.height
            }, 
            headerTitleStyle :{
                alignSelf: 'center',
                color: 'white'
            }
        })
}



export const URI = {
    ip: '10.21.1.245:3001'
}