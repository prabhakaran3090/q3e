import React, { Component } from 'react';
import { WebView, TouchableHighlight,View } from 'react-native';   
import HTMLView from 'react-native-htmlview';    
import { NavigationActions } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { SBHeaderStyle, headerProp } from '../config/Config'; 
class ViewBook extends Component {    
    static navigationOptions = ({ navigation }) => {
        const header = headerProp(navigation);
        header.headerLeft = <TouchableHighlight
            underlayColor='transparent'
            onPress={() => navigation.dispatch({
                type: 'back'
            })}
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
        header.headerTitle = navigation.state.params.data.cname;

        return (header);
    };
    constructor(props){
        super(props) 
    }

    render() {      
        return ( <WebView source={{ html: this.props.navigation.state.params.data.html }} /> );
    }
}
 
export default ViewBook;
