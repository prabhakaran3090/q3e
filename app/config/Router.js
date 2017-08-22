

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
import LoadingScreen from '../components/LoadingScreen';
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
import CourseOutline from '../components/CourseOutline';
import Description from '../components/Description'; 
import BookIndex from '../components/BookIndex';
import Loading from '../components/Loading';
import ChapterView from '../components/ChapterView';
import VideoIndex from '../components/VideoIndex'; 
import ViewBook from '../components/ViewBook'; 

import { SBHeaderStyle, headerProp } from '../config/Config'; 

const ForumStack = StackNavigator({
    Course: {
        screen: CourseScreen,
        navigationOptions: {
            title: 'Courses'
        }
    },
    Forum: {
        screen: ForumScreen,
        navigationOptions: {
            title: 'Forum'
        }
    },
    ForumTopics: {
        screen: ForumTopicScreen,
        navigationOptions: {
            title: 'Forum Topics'
        }
    },
    ForumDiscussion: {
        screen: ForumDiscussion,
        navigationOptions: {
            title: 'Forum Discussion'
        }
    },
}); 

const TabBar = TabNavigator({
    HomeStack: {
        screen: StackNavigator({ Home: { screen: HomeScreen}}),
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
        screen: StackNavigator({ Profile: { screen: ProfileScreen } }),
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



const CustomDrawerContentComponent = (props) => (
    <View style={{flex: 1,  backgroundColor: '#32313F', paddingTop: StatusBar.currentHeight, }}> 
        <View style={{padding:  20, flexDirection: 'row'}} >
           <View style={{flex: 4}}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Prabhakaran</Text>
                <Text style={{ color: 'white' }}>prabhakaran@tenet.res.in</Text>
           </View> 
        </View>
        <DrawerItems {...props}  />
    </View>
);

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
        screen: StackNavigator({ 
            CourseOutline: { screen: CourseOutline }, 
            Description : { screen: Description },
            BookIndex: { screen: BookIndex }
        }),
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
    contentComponent: CustomDrawerContentComponent,
    initialRouteName: 'Home'
}


const DrawerNav = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig);

const courseMain = StackNavigator({ 
    CourseOutline: { screen: CourseOutline },
    Description: { screen: Description },
    BookIndex: { screen: BookIndex }
});

 export const BookTabView = TabNavigator({
    ChapterView : {
        screen: ChapterView,
        navigationOptions: { 
            tabBarLabel: 'Chapters'
        }
    } ,
    VideoIndex: {
        screen: VideoIndex,
        navigationOptions: {
            tabBarLabel: 'Videos'
        }
    }   
}, {tabBarOptions: { 
        style: {
            backgroundColor: '#32313F',
        },
    }
});

export const BookTabStack = StackNavigator({
    BookHome: { screen: BookTabView },
    Loading: {screen: Loading },
    ViewBook: { screen: ViewBook }
}, { headerMode: 'screen'})

const AppNavigatorStack = {
    Login: { screen: LoginScreen },
    Main: { screen: DrawerNav },
    CourseMain: { screen: courseMain },
    BookView: { screen: StackNavigator({
        Home: { screen: BookIndex }
    }) }
};

export const AppNavigator = StackNavigator( AppNavigatorStack , { headerMode: 'none' } );