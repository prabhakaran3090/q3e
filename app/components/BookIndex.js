import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { _ } from 'lodash';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';

import { BookTabStack } from '../config/Router';
import { SBHeaderStyle, headerProp } from '../config/Config';
import * as courseActions from '../actions/courses';

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
        this.state = { course: null, loading: true }    
    } 

    componentWillMount(){
        const { params } = this.props.navigation.state;
        this.props.getBookIndex(params.data.id); 
    }

    componentWillReceiveProps(nextProps) { 
        this.setState({
            course: nextProps.courses,
            loading: false
        })
    }

    render() {   
        const { nav, dispatch } = this.props;     
        if(this.state.loading == true)
            return (<View style={{ flex: 1 }}>
                        <ActivityIndicator style={{ margin: 100 }} />
                    </View>);  
        return (
            <BookTabStack   
                screenProps={this.state.course.BookIndex} 
                navigation={addNavigationHelpers({ dispatch, state: nav })} 
            />
        );
    } 
}
const mapStateToProps = ({ courses, NavBook }) => {
    return{
        courses,
        nav: NavBook
    }
};
const mapDispatchToProps = (dispatch) => {
    let actionCreators = bindActionCreators(courseActions, dispatch)
    return ({
        ...actionCreators,
        dispatch
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(BookIndex);