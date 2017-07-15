
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  ScrollView
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper'; 
import { Card, ListItem, Button } from 'react-native-elements'

import FlatScroll from './FlatScroll';

const users = [
 {
    name: 'Input and Output Streams -Interfaces, Packages Collections and Vectors,Files- OOPS',
    avatar: 'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'
 }, 
   {
    name: 'Learn and Understand AngularJS',
    avatar: 'https://udemy-images.udemy.com/course/304x171/289230_1056_16.jpg'
 }, 
]


export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {  
    return({
        title: 'Q3E',  
        drawerLabel: 'Home',
        drawerIcon: (props) => <MaterialIcons
                      name="home"
                      size={24}
                      style={{ color: props.tintColor }}
                    />,  
        headerLeft: <TouchableHighlight  underlayColor='transparent'  onPress={() => { navigation.navigate('DrawerOpen') }}><Icon name='bars'  size={25} style={{color: 'white',marginLeft:20}}/></TouchableHighlight>,
        headerRight: <Icon name='ellipsis-v'  size={25} style={{color: 'white',marginRight:20}}/>, 
        headerStyle:{
          backgroundColor: '#32313F', 
           height: 80,
          paddingTop: StatusBar.currentHeight, 
        }, 
        headerTitleStyle :{
          alignSelf: 'center',
          color: 'white'
        }, 
      })
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
}


  renderSwipe(){
    return(<Swiper 
         height={250} horizontal={true} 
         loop={true} bounces={true} 
         removeClippedSubviews={false}
      > 

    <View style={styles.slide}>
      <View style={{flex:4}}>
        <Image 
          resizeMode='cover'
          style={styles.image} 
          source={{uri: users[0].avatar}} 
        /> 
      </View>
      <View style={styles.SwipeTextBox}>
        <Text style={styles.SwipeTextStyle}>
          {users[0].name}
        </Text>
      </View>        
      <View style={styles.SwipeTextBox}>
       <View style={{flexDirection: 'row'}}> 
           <Text style={styles.SwipeTextStyle}>
            <MaterialIcons
              name="access-time"
              size={24} 
            /> 
        </Text>    
        <Text style={styles.SwipeTextStyle}>30.08.1990 05.30 PM </Text>        
       </View>
       <View style={{flexDirection: 'row', marginLeft: 20}}> 
           <Text style={styles.SwipeTextStyle}>
            <MaterialIcons
              name="videocam"
              color = 'green'
              size={24} 
            /> 
        </Text>    
        <Text style={{marginTop: 6, fontSize: 15, fontWeight:'bold', color: 'green'}}>Live</Text>        
       </View>
      </View>
    </View> 
      
    <View style={styles.slide}>
      <View style={{flex:4}}>
        <Image 
          resizeMode='cover'
          style={styles.image} 
          source={{uri: users[1].avatar}} 
        /> 
      </View>
      <View style={styles.SwipeTextBox}>
        <Text style={styles.SwipeTextStyle}>
          {users[1].name}
        </Text>
      </View>        
      <View style={styles.SwipeTextBox}>
       <View style={{flexDirection: 'row'}}> 
           <Text style={styles.SwipeTextStyle}>
            <MaterialIcons
              name="access-time"
              size={24} 
            /> 
        </Text>    
        <Text style={styles.SwipeTextStyle}>30.08.1990 05.30 PM </Text>        
       </View>
       <View style={{flexDirection: 'row', marginLeft: 20}}> 
           <Text style={styles.SwipeTextStyle}>
            <MaterialIcons
              name="videocam"
              color = 'green'
              size={24} 
            /> 
        </Text>    
        <Text style={styles.indicateLive}>Live</Text>        
       </View>
      </View>
    </View>       

      
      </Swiper>)
  } 
  render() {
   let swiper = null;
   if (this.state.visibleSwiper) {
      return( 

        <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
          {this.renderSwipe()}
          <Text style={styles.HeaderStyle}>Upcoming Session</Text>
          <FlatScroll />
          <Text style={styles.HeaderStyle}>Completed Session</Text>
          <FlatScroll />
       </ScrollView>

       );
   } else {
       return(<View>
         <Text> </Text>
       </View>);
   } 
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  indicateLive:{
    marginTop: 6,
    fontSize: 15,
    fontWeight:'bold',
    color: 'green'
  },
  icon:{
    flex:1
  },
  slide:{
    flex:1,
    backgroundColor: '#F8F8F8',  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 20,
    elevation: 2, 
  },image:{
    flex:1
  },
  SwipeTextBox:{ 
    paddingLeft: 10,  
    flexDirection: 'row'
  },
  SwipeTextStyle:{ 
    fontSize: 15,
    fontWeight:'bold', 
    color: 'black',
    padding: 5
  },
  HeaderStyle:{
    fontSize: 15, 
    paddingLeft: 10,
    marginTop: 15
  }
});
