import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'; 
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import { SBHeaderStyle, headerProp } from '../config/Config'; 
import ChapterView from '../components/ChapterView';
import VideoIndex from '../components/VideoIndex'; 


const BookTabView = TabNavigator({
    ChapterView: {
        screen: ChapterView,
        navigationOptions: {
            tabBarLabel: 'Chapters'
        }
    },
    VideoIndex: {
        screen: VideoIndex,
        navigationOptions: {
            tabBarLabel: 'Videos'
        }
    }
}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#32313F',
            },
        }
});

export default class CVTabBar extends Component {
    static navigationOptions = ({ navigation }) => { 
        const header = headerProp(navigation);
        header.headerLeft = <TouchableHighlight
            underlayColor='transparent'
            onPress={() => navigation.dispatch(NavigationActions.back())}
        >
            <MaterialIcons
                name='arrow-back'
                size={25}
                style={{ color: 'white', marginLeft: 20 }}
            />
        </TouchableHighlight>;

        header.headerRight = <View
            style={{ marginLeft: 20 }}
        />;
        header.headerTitle = navigation.state.params.BookIndex.cname;

        return (header);
    };

    constructor(props){
        super(props); 
    }
    
    render(){    
        return <BookTabView screenProps={{ index: this.props.screenProps, id: this.props.navigation.state.params.BookIndex.id}} />
    }

}
