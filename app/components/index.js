
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

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

import { AppContent, Login, AppMain } from '../config/Router';  

class AppIndex extends Component{

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
        const { nav, dispatch } = this.props; 
        if (this.state.loading)  
            return (<Loading />); 

        if (this.state.logged || this.props.isLoggedIn)   
            return (<AppContent />);  

        return (<Login />);
    }
}

const mapStateToProps = ({ Auth, Nav }) => {
    return({
        isLoggedIn: Auth.isLoggedIn,
        nav: Nav
    })
}

export default connect(mapStateToProps)(AppIndex);