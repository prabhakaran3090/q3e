

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import CourseScreen from '../components/CourseScreen';
import ForumScreen from '../components/ForumScreen';
import ForumTopicScreen from '../components/ForumTopicScreen';
import ForumDiscussion from '../components/ForumDiscussion';
import CalendarScreen from '../components/CalendarScreen';
import AgendaScreen from '../components/CalendarScreen2';
import BrowseScreen from '../components/BrowseScreen';
import ProfileScreen from '../components/ProfileScreen';
import EditScreen from '../components/ProfileEdit';
import NotificationScreen from '../components/NotificationScreen';
import Loading from '../components/Loading';
import { SBHeaderStyle, headerProp } from '../config/Config'; 

const TabBar = TabNavigator({
    Home: {
        screen: StackNavigator({ Home: { screen: HomeScreen}}),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={25} color={tintColor} />,
            tabBarLabel: 'Home'
        }
    },
    Browse: {
        screen: BrowseScreen,
        navigationOptions: {
            tabBarLabel: 'Browse',
            tabBarIcon: ({ tintColor }) => <Icon name='play-circle-o' size={25} color={tintColor} />
        }
    },
    Profile: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user-circle-o' size={20} color={tintColor} />
        }
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='bell-o' size={20} color={tintColor} />
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: 'green',
            showIcon: true,
            style: { backgroundColor: 'whitesmoke', borderTopWidth: 0.5, borderTopColor: '#dadada' },
            inactiveTintColor: 'black',
            upperCaseLabel: false,
            tabStyle: { padding: 0, margin: 0, alignSelf: 'center' },
            indicatorStyle: { opacity: 0 },
            pressColor: 'gray',
            labelStyle: { fontSize: 11, marginTop: 0, },
        },
        tabBarPosition: 'bottom',
        initialRouteName: 'Home',
    });



const CustomDrawerContentComponent = (props) => (
    <View style={{ flex: 1, backgroundColor: '#32313F', paddingTop: StatusBar.currentHeight, }}>
        <View style={{ marginTop: SBHeaderStyle.Top, alignSelf: 'center' }} >
            <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 200, height: 60, resizeMode: 'contain' }}
            />
        </View>
        <DrawerItems {...props} />
    </View>
);

const DrawerRouteConfigs = {
    Home: {
        path: '/',
        screen: TabBar
    },
    Course: {
        path: '/forum',
        screen: HomeScreen,
    },
    Calendar: {
        path: '/calendar',
        screen: HomeScreen,
    }
}
const DrawerNavigatorConfig = {
    contentOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#FF9D44',
        activeBackgroundColor: '#25252b',
        style: {
            backgroundColor: '#32313F',
            flex: 1,
            paddingTop: SBHeaderStyle.Top
        }
    },
    contentComponent: CustomDrawerContentComponent,
    initialRouteName: 'Home'
}


export const DrawerNav = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig);


export const AppNavigator = StackNavigator({  
    Login: { screen: LoginScreen },
    Main: { screen: DrawerNav },
  },{
      headerMode: 'none'
  });