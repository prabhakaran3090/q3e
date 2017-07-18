
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList, Image
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Card, ListItem, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const course_list = [{
  key:1,
  name:'Frequency Domain  ',
  image:'https://udemy-images.udemy.com/course/304x171/426570_1b91_3.jpg'
},
{
  key:2,
  name:'Input and Output Streams -Interfaces, Packages Collections and Vectors ',
  image:'https://udemy-images.udemy.com/course/304x171/913448_e6e2.jpg'
},
{
  key:3,
  name:'Frequency Domain Representation of Continuous ',
  image:'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'
},
{
  key:4,
  name:'Input and Output Streams -Interfaces, Packages Collections and Vectors ',
  image:'https://udemy-images.udemy.com/course/304x171/289230_1056_16.jpg'
},];

export default class FlatScroll extends Component {

 
 constructor(props){
  super(props);
  this._onCoursec = this._onCoursec.bind(this);
}

_onCoursec(item){ 
    const {navigate}= this.props.navigation;
    navigate('Profile')
}

  _renderItem(item){
    
    return( 
      <View style={[styles.box, {height: 230,}]}>
          <View style={{flex: 5 }}>
            <TouchableHighlight onPress={() => this._onCoursec(item) } style={{flex: 1}} >
              <Image style={{flex: 1}} resizeMode="cover" source={{uri: item.image}} />
            </TouchableHighlight>
          </View>
          <View style={{flex: 3,   padding:5 ,}}>
          <Text style={{padding:5,width:250,color:'black', fontSize: 13, fontWeight: 'bold',flex: 1}}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', flex: 1}}> 
              <Text style={ styles.SwipeTextStyle }>
                <MaterialIcons
                  name="access-time"
                  size={20} 
                /> 
            </Text>    
            <Text style={ styles.SwipeTextStyle }>30.08.1990 05.30 PM </Text>        
          </View>           
          </View>
      </View> 
      )

    
  }


  render() {
    return (
     
        <FlatList 
            horizontal
            renderItem={({item}) => this._renderItem(item)}
            data={course_list} 
          />
 
    );
  }
}


const styles = {
  box: {  
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, 
    elevation: 1, 
    marginLeft: 5,
    marginRight: 5,
    marginTop:18,
    flex: 1,
    marginBottom: 10
  },
    SwipeTextBox:{  
    flexDirection: 'row'
  },
  SwipeTextStyle:{ 
    fontSize: 13,
    fontWeight:'bold', 
    color: 'black',
    padding: 5
  },
}
