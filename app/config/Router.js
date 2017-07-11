
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'; 
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
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


CourseScreen.navigationOptions = {
  drawerLabel: 'Forum',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="forum"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};
CalendarScreen.navigationOptions = {
  drawerLabel: 'Calendar',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="perm-contact-calendar"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

export const CalendarStack = StackNavigator({ 
      Calendar: { 
        screen: CalendarScreen,
        navigationOptions:{
         title: 'Calendar'
        } 
      } ,
      Agenda: {
        screen: AgendaScreen,
        navigationOptions:{
         title: 'Events'
        } 
      }
  },{
    headerMode: 'none',
  });

export const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Edit: {
    screen: EditScreen,
  },
},{
    headerMode: 'none',
  });


export const ForumStack = StackNavigator({
  Course: {
    screen: CourseScreen,
  },
  Forum: {
    screen: ForumScreen,
  },
  ForumTopics: {
    screen: ForumTopicScreen,
  },
  ForumDiscussion: {
    screen: ForumDiscussion,
  },
},{
    headerMode: 'none',
  });



const HomePage = TabNavigator({
                        Home:{
                            screen: HomeScreen ,
                            navigationOptions:{
                                tabBarIcon: ({tintColor}) => <Icon name='home' style={styles.tabBarIconStyle} size={25} color={tintColor}/>                                ,
                                tabBarLabel: 'Home'
                            }
                        },
                        Browse:{
                            screen: BrowseScreen ,
                            navigationOptions:{
                              tabBarLabel:'Browse',
                                tabBarIcon: ({tintColor}) => <Icon name='play-circle-o' style={styles.tabBarIconStyle} size={25} color={tintColor}/>                                
                            }
                        }, 
                        Profile:{
                            screen: ProfileStack ,
                            navigationOptions:{
                                tabBarLabel:'Profile',
                                tabBarIcon: ({tintColor}) => <Icon name='user-circle-o' style={styles.tabBarIconStyle} size={20} color={tintColor}/>                                
                            }
                        },
                        Notification:{
                            screen: NotificationScreen ,
                            navigationOptions:{
                                tabBarIcon: ({tintColor}) => <Icon name='bell-o' style={styles.tabBarIconStyle} size={20} color={tintColor}/>                                
                            }
                        },
                    },{
                         tabBarOptions: {
                             activeTintColor: 'green',
                             showIcon: true,
                             style: {backgroundColor: 'white',borderTopWidth:1,borderTopColor: '#dbdbdb' },
                             inactiveTintColor: 'black',
                             upperCaseLabel: false,
                             tabStyle: {padding:0},
                             indicatorStyle: {opacity:0},
                             pressColor :'gray', 
                         },
                        tabBarPosition: 'bottom',
                    })

const DrawerTab = DrawerNavigator(
                            {
                                Home: {
                                    path: '/',
                                    screen: HomePage
                                },
                                Course: {
                                    path: '/forum',
                                    screen: ForumStack,
                                    navigationOptions:{
                                  title:'Forum'
                            }
                                },
                                Calendar: {
                                    path: '/calendar',
                                    screen: CalendarStack,
                                },
                            },
                            { 
                                contentOptions: {
                                    activeTintColor: '#e91e63',
                                },
                            }
                        );


export const App = StackNavigator({ 
                            Login: { screen: LoginScreen } ,
                            Home: {screen: DrawerTab}
                        });

const styles = StyleSheet.create({
    tabBarIconStyle: {  }
}) ;       