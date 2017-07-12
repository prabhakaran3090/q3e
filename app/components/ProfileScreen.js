
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight, ScrollView,StatusBar } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome'; 


export const profile_data = {
  "gender": "male",
   "uname": "Vimalraj",
   "phone": "9551234578",
  "name": "Vimal N",
  "email": "vimal@tenet.res.in", 
  "picture": {
    "large": "http://www.tenet.res.in/picture/136EE_user.png"
  },
 
};


export default class ProfileScreen extends Component {
    
  static navigationOptions = {
    header: null
  }
 
  
  handleSettingsPress = () => {
    const edit_data = this.props;
    this.props.navigation.navigate('Edit',{data: profile_data});
  };
 
  render() {
    
    return (
      <ScrollView style={{marginTop: StatusBar.currentHeight}}>
          <Tile
          imageSrc={{ uri: profile_data.picture.large}}
          featured
          title={`${profile_data.name.toUpperCase()}`}
          caption={profile_data.email}
          imageContainerStyle={{padding:180}}
        />
        <Button
          title="EDIT"
          buttonStyle={{ marginTop: 20,backgroundColor:"#1abc9c" }}
          onPress={this.handleSettingsPress}
        />
        <List>
          <ListItem
            title="Email"
            rightTitle={profile_data.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={profile_data.phone}
            hideChevron
          />
        </List>
        <List>
          <ListItem
            title="Username"
            rightTitle={profile_data.uname}
            hideChevron
          />
        </List>
        <List>
            <ListItem
            title="Gender"
            rightTitle={profile_data.gender}
            hideChevron
          />
        </List>

      </ScrollView>
      
    );
  }
}
