
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
import { Card, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import FlatScroll from './FlatScroll'; 
import { SBHeaderStyle, headerProp } from '../config/Config';
import Swiper from './Swiper';
import { getSessions } from '../actions/courses'; 
import TopRightmenu from '../components/TopRightmenu';

class HomeScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {

    const header = headerProp(navigation); 
    header.headerRight =  <TopRightmenu nav={navigation} />; 
    return (header);
  };
 
  constructor(props) { 
    super(props);

    this.state = {
      visibleSwiper: false
    };
    
  }

  componentDidMount() {

    setTimeout(() => {
        this.setState({
          visibleSwiper: true
        });
    }, 0); 
      console.log('sessions')

    this.props.getSessions();
    
  }
 
  render() {   
    console.log(this.props.sessions)
      return(  
        <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
          <Swiper data = {this.props.sessions.live} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.HeaderStyle,{ flex:1}]}>Upcoming Session</Text>
            <Text style={[styles.HeaderStyle,styles.HeaderRight]}>View All</Text>
          </View>
          <FlatScroll data={this.props.sessions.upcoming} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.HeaderStyle,{ flex:1}]}>Completed Session</Text>
            <Text style={[styles.HeaderStyle, styles.HeaderRight]}>View All</Text>
          </View> 
          <FlatScroll data={this.props.sessions.completed}/>
       </ScrollView>

       );
    
  }

}

const styles = StyleSheet.create({ 
  HeaderStyle:{
    fontSize: 15, 
    paddingLeft: 10,
    marginTop: 15,
    color: '#212121',
    fontWeight: 'bold'
  },
  HeaderRight: { textAlign: 'right', marginRight: 10, flex: 1, color: '#0089da' }
});

mapStateToProps = ({courses, Auth}) => { 
  return({
    sessions: courses.sessions,
    isLoggedIn: Auth.isLoggedIn
  })
}


export default connect(mapStateToProps,{ getSessions })(HomeScreen);