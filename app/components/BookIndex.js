import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { _ } from 'lodash';

import { BookTabView } from '../config/Router';
import { SBHeaderStyle, headerProp } from '../config/Config';
import { getBookIndex } from '../actions/courses';
class BookIndex extends Component {
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
        header.headerTitle = navigation.state.params.data.name;

        return (header);
    };

    constructor(props) {

        super(props);

        const { params } = this.props.navigation.state; 
        this.props.getBookIndex(params.data.id)
        this.state = { indexItems: null }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ indexItems: nextProps.indexItems })
    }

    render() {  
        if(this.state.indexItems == null)
            return (<View style={{ flex: 1 }}>
                        <ActivityIndicator style={{ margin: 100 }} />
                    </View>);

        return (
            <BookTabView screenProps={this.state.indexItems.BookIndex} />
        );
    }
}
const mapStateToProps = ({ courses }) => {
    return{
        indexItems: courses
    }
};

export default connect(mapStateToProps,{ getBookIndex })(BookIndex);