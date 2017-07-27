
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, SearchBar } from 'react-native-elements';

import { SBHeaderStyle, headerProp } from '../config/Config';

export default class BrowseScreen extends Component {
 
 static navigationOptions = ({ navigation }) => { 
    console.log(navigation)
    const header = headerProp(navigation); 
    header.headerRight =  <Icon name='search'  size={25} style={{color: 'white',marginRight:20}} />;
    header.headerTitle = 'My Courses';

    return (header);
  };
  render() {
    return (
      <View>
        <SearchBar 
  placeholder='Type Here...' />
        <List containerStyle= {{marginTop:0, paddingTop:0}}>
          <ListItem
            roundAvatar
            title='Input and Output Streams -Interfaces, Packages Collections and Vectors,Files- OOPS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />
          <ListItem
            roundAvatar
            title='Learn and Understand AngularJS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/289230_1056_16.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />
          <ListItem
            roundAvatar
            title='Input and Output Streams -Interfaces, Packages Collections and Vectors,Files- OOPS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />   
 <ListItem
            roundAvatar
            title='Input and Output Streams -Interfaces, Packages Collections and Vectors,Files- OOPS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />
          <ListItem
            roundAvatar
            title='Learn and Understand AngularJS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/289230_1056_16.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />
          <ListItem
            roundAvatar
            title='Input and Output Streams -Interfaces, Packages Collections and Vectors,Files- OOPS'
            subtitle={
              <View style={styles.subtitleView}> 
                 <Text style={styles.ratingText}>Dr. Ashwin Mahalingam</Text>
              </View>
            }
            avatar={{uri: 'https://udemy-images.udemy.com/course/304x171/836044_c960_4.jpg'}}
            avatarStyle={{borderRadius:0, width: 60, height: 60}}
            titleStyle = {{fontSize:13,fontWeight: 'bold'}} 
          />                              
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  }, 
  ratingText: { 
    color: 'grey'
  }
});
