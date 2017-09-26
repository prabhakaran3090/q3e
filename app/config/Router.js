
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image,
    AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from '../components/LoginScreen';
import LoadingScreen from '../components/LoadingScreen';
import HomeScreen from '../components/HomeScreen';
import FlatScroll from '../components/FlatScroll';
import Sessions from '../components/Session';
import CourseScreen from '../components/CourseScreen';
import ForumScreen from '../components/ForumScreen';
import ForumDiscussion from '../components/ForumDiscussion';
import CalendarScreen from '../components/CalendarScreen';
import AgendaScreen from '../components/CalendarScreen2';
import BrowseScreen from '../components/BrowseScreen';
import ProfileScreen from '../components/ProfileScreen';
import EditScreen from '../components/ProfileEdit';
import NotificationScreen from '../components/NotificationScreen';
import CourseOutline from '../components/CourseOutline';
import Description from '../components/Description'; 
import BookIndex from '../components/BookIndex';
import Loading from '../components/Loading'; 
import ViewBookWebView from '../components/ViewBookWebView'; 
import DrawerLeftConfig from '../components/DrawerLeftConfig'; 
import CVTabBar from '../components/CVTabBar'; 
import VideoPlayer from '../components/VideoPlayer'; 

import { SBHeaderStyle, headerProp } from '../config/Config'; 

const ForumStack = StackNavigator({
    Course: {  screen: CourseScreen },
    ForumList: { screen: ForumScreen }, 
    ForumDiscussion: { screen: ForumDiscussion  },
});

const ProfileStack = StackNavigator({ 
      Profile: { screen: ProfileScreen },
      Edit: { screen: EditScreen }
    },{
      headerMode: 'none'
});

    const courseMain = StackNavigator({
        CourseOutline: { screen: CourseOutline },
        Description: { screen: Description },
        BookIndex: { screen: BookIndex }
    });

  const HomeStack = StackNavigator({ 
    Home: { screen: HomeScreen},
    Session: { screen: Sessions },  
    },{
    headerMode: 'none'
});

const TabBar = TabNavigator({
    HomeStack: {
        screen: StackNavigator({ Home: { screen: HomeStack}}),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={25} color={tintColor} />,
            tabBarLabel: 'Home'
        }
    },
    BrowseStack: {
        screen: StackNavigator({
            Browse: {   screen: BrowseScreen },
                        CourseOutline: { screen: CourseOutline },
                        Description: { screen: Description },
                        BookIndex: { screen: BookIndex } 
                    }),
        navigationOptions: {
            tabBarLabel: 'Browse',
            tabBarIcon: ({ tintColor }) => <Icon name='play-circle-o' size={25} color={tintColor} />
        }
    },
    Profile: {
        screen: StackNavigator({ Profile: { screen: ProfileStack } }),
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user-circle-o' size={20} color={tintColor} />
        }
    },
    NotificationStack: {
        screen: StackNavigator({ Notification: { screen: NotificationScreen } }),
        navigationOptions: {
            tabBarLabel: 'Notification',
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
        initialRouteName: 'HomeStack',
    });


 

export const CalendarStack = StackNavigator({ 
      Calendar: { screen: CalendarScreen },
      Agenda: { screen: AgendaScreen }
  });

const DrawerRouteConfigs = {
    Home: {
        path: '/',
        screen: TabBar
    },
    Forum: {
        path: '/forum',
        screen: ForumStack,
    },
    Calendar: {
        path: '/calendar',
        screen: CalendarStack,
    }
}
const DrawerNavigatorConfig = {
    contentOptions: {
        inactiveTintColor: 'white',
        activeTintColor: 'white',
        activeBackgroundColor: '#28262b',
        style: {    
            flex: 1
        }
    },
    contentComponent: DrawerLeftConfig,
    initialRouteName: 'Home'
}


export const DrawerNav = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig); 
 
export const BookTabStack = StackNavigator({
    BookHome: {
        screen: StackNavigator({
            BookHomeScreen: { screen: CVTabBar },
            ViewBook: { screen: ViewBookWebView },
            VP: { screen: VideoPlayer }
        }) 
    },
    Loading: { screen: Loading }, 
}, { headerMode: 'none'})

const AppNavigatorStack = {
    Login: { screen: LoginScreen },
    Main: { screen: DrawerNav },
    CourseMain: { screen: courseMain },
    BookView: { screen: StackNavigator({
        Home: { screen: BookIndex }
    }) }
};

export const AppNavigator = StackNavigator( AppNavigatorStack , { headerMode: 'none' } );