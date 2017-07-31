
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList, Image,
  ActivityIndicator,
  Dimensions
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Card, ListItem, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import _ from 'lodash';

export default class FlatScroll extends Component {

 
 constructor(props){
  super(props);
  this._onCoursec = this._onCoursec.bind(this);
}

_onCoursec(item){ 
    const {navigate}= this.props.navigation;
    navigate('Profile')
}

objectLength(obj){ 
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size; 
}

  _renderItem(item){ 
    return( 
      <View style={[styles.box, {height: 270,}]} >
          <View style={{flex: 5 }}>
            <TouchableHighlight onPress={() => this._onCoursec(item) } style={{flex: 1}} >
              <Image style={{flex: 1}} resizeMode="cover" source={{uri: item.img_url}} />
            </TouchableHighlight>
          </View>
          <View style={{flex: 3,   padding:5 ,}}>
          <Text style={{padding:2,width:250,color:'black', fontSize: 13, fontWeight: 'bold',flex: 1}}>
            {item.fullname}
          </Text>
          <Text style={{padding:2,width:250,color:'#4e4e4e', fontSize: 13, fontWeight: 'bold',flex: 1}}>
            {item.event_name}
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

  renderFooter(item) {

    const count = this.objectLength(item);
    if (count == 0 || count == null) {
      return (

        <View style={[{ flex: 1, width: Dimensions.get('window').width ,height: 230, alignItems: 'center', justifyContent: 'center', padding: 20 }]}>

          <Text style={{ textAlign: 'center', width: 330, color: 'black', fontSize: 13, margin: 0, fontWeight: 'bold' }}>
            Sessions not available
            </Text>

        </View>

      );
    } else if (count <= 5) {

      return (<View></View>);

    } else {
      return (
        <TouchableHighlight underlayColor='transparent' onPress={() => this._onCourseAll(item)} style={{ flex: 1 }} >
          <View style={[styles.box, { height: 230, alignItems: 'center', justifyContent: 'center', padding: 20 }]}>

            <Text style={{ textAlign: 'center', width: 100, color: '#0089da', fontSize: 13, fontWeight: 'bold' }}>
              View All
            </Text>

          </View>
        </TouchableHighlight>
      );
    }

  }

  render() {

    const data = _(this.props.data).slice(0).take(5).value();   
    if(data == undefined){
      return(
        <View style={{flex: 1}}>
          <ActivityIndicator style={{ margin: 100 }} />
        </View>
      )
    } 
    return (
     
        <FlatList 
            horizontal
            renderItem={({item}) => this._renderItem(item)}
            keyExtractor={(item, index) => index}
            data={data} 
            ListFooterComponent={this.renderFooter(data)}
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
    paddingLeft: 0,
    paddingTop:2,
    paddingRight: 5,
    paddingBottom: 2
  },
}
