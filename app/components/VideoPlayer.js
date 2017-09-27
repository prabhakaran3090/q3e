
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    StatusBar,
    ScrollView,
    Constants
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { getSessions } from '../actions/courses'; 
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';
import VP from './common/VideoPlayer';
import { URI } from '../config/Config';
export default class VideoPlayer extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props); 
    }
    
    
    render(){ 
        const { source,id } = this.props.navigation.state.params.data;  
        return(<View style={{flex: 1}}> 
            <VP navigation={this.props.navigation} source={{ uri: `http://${URI.coursePack}/ebook/`+id+`/files/videos/`+source}} />
            </View>);
    }
}