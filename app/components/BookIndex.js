import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, ActivityIndicator, Text } from 'react-native'; 
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

    static navigationOptions = {
        header:null
    };

    constructor(props) { 
        super(props); 
        this.state = { 
            course: null, 
            loading: true,
            cname: this.props.navigation.state.params.data.name
        }    
    } 

    componentWillMount(){
        const { params } = this.props.navigation.state;
        this.props.getBookIndex(params.data.id, this.state.cname); 
    }

    componentWillReceiveProps(nextProps) { 
        this.setState({
            course: nextProps.courses.BookIndex.index,
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
                screenProps={{   BI: this.state.course  }} 
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