import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

import { BookTabView } from '../config/Router';
import { SBHeaderStyle, headerProp } from '../config/Config';

export default class BookIndex extends Component {
    static navigationOptions = ({ navigation }) => {

        const header = headerProp(navigation);

        header.headerLeft = <TouchableHighlight
            underlayColor='transparent'
            onPress={() => { navigation.goBack() }}
        >
            <Icon
                name='arrow-left'
                size={25}
                style={{ color: 'white', marginLeft: 20 }}
            />
        </TouchableHighlight>;

        header.headerRight = <View
            style={{ marginLeft: 20 }}
        />;
        header.headerTitle = 'Memory Mapping and Peripheral Interfacing';

        return (header);
    };


     
    render() {
        return (
            <BookTabView />
        );
    }
}