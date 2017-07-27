
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar, 
  AsyncStorage 
} from 'react-native'; 
import Loading from './Loading';

import { AppContent, Login } from '../config/Router';  

export default class AppIndex extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            logged: false,
            loading: true,
        };
    }

    componentWillMount() {  
        AsyncStorage.getItem('username')
        .then((data) => {    
             if (data !== null) {
                this.setState({
                    logged: true,
                    loading: false,            
                }); 
             } else {
                 this.setState({
                    loading: false,
                });
             } 
        });  
    }

    render(){

        if (this.state.loading)  
            return (<Loading />); 

        if (this.state.logged)   
            return (<AppContent />); 

        return (<Login />);
    }
}