import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Edit extends Component {
  
  constructor(props){
    super(props);
    const {state} = this.props.navigation;

    this.state = {
        name: state.params.data.name,
        email: state.params.data.email,
        phone: state.params.data.phone,
        };
 
  }

  static navigationOptions = {  
    title:'Edit'
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  validatePhone = (phone) => {
  const phoneno = /^[0-9]{1,10}$/;
  return phoneno.test(phone);
  };
  
 _handlePress() {

      if (!this.validateEmail(this.state.email)) {
        Alert.alert(
          '',
          'Enter Your Valid Email Id',
          [
            {text: 'OK'},
          ])
      }
      else if (!this.validatePhone(this.state.phone)) {
          Alert.alert(
          '',
          'Enter Your Valid Mobile Number',
          [
            {text: 'OK'},
          ])
      }
      else {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.phone);
         Alert.alert(
        '',
        'Submitted Successfully',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
      }
  }

  render() {
    const {state} = this.props.navigation;
    return (
      <View>
          <FormLabel>Name</FormLabel>
          <FormInput
           inputStyle={{width:null}}
           onChangeText={(text) => this.setState({name:text})}
           value={this.state.name}
          />

          <FormLabel>Email</FormLabel>
          <FormInput
           inputStyle={{width:null}}
           onChangeText={(text) => this.setState({email:text})}
           value={this.state.email}
          />

          <FormLabel>Phone</FormLabel>
          <FormInput
           inputStyle={{width:null}}
           onChangeText={(text) => this.setState({phone:text})}
           value={this.state.phone}
          />
          
          <Button
          title="Submit"
          buttonStyle={{ marginTop: 10,backgroundColor:"#1abc9c" }}
          onPress={() => this._handlePress()}
        />

      </View>
    );
  }
}
