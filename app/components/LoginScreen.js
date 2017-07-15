
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View, 
  Image,
  Text,
  ScrollView,
  StatusBar, 
} from 'react-native';
import { InputBox, Button, Spinner } from './common';

export default class LoginScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props){
      super(props);
  }

    renderButton() {
 
    return ( 
        <Button onPress={() => this.props.navigation.navigate('Home') } childText >
            Login
        </Button>    
    ); 
  }

  render() {
    return (
      <Image source={require('../assets/images/bg.png')} style={styles.wrapper}>
                    <View style={styles.container}> 
                            <View style={styles.logoContainer}>
                                <Image style={styles.logoImage} source={require('../assets/images/logo.png')} />
                            </View>
                                <ScrollView>
                                    <View style={styles.LoginBody}>
                                        <InputBox 
                                            placeholder="Server IP"
                                            icon="globe" 
                                        />   
                                        <InputBox 
                                            placeholder="Username"
                                            icon="user" 
                                        />    
                                        <InputBox 
                                            secureTextEntry
                                            placeholder="Password"
                                            icon="key" 
                                        /> 
                                        <Text style={styles.errorText} >{this.props.error}</Text> 
                                        {this.renderButton.call(this)}           
                                    </View>  
                                <View style={styles.borderButton} >
                                <Text style={{ color: 'orange', fontWeight: '600', fontSize: 16 }}>
                                   SKIP
                                </Text>
                            </View>  
                                </ScrollView> 
                            <View style={styles.LoginFooter} />
    
                    </View>
                </Image>   
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
            flex: 1, 
            width: null,
            height: null,
    },
    container: {
        flex: 1, 
        flexDirection: 'column', 
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',   
    },
    logoImage: {
        width: 153,
        height: 24, 
    },
    LoginBody: {  
        flex: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 80
    },
    LoginFooter: { 
         flex: 0.5,
         alignItems: 'center',
        justifyContent: 'center',   
    },
    errorText: {
        color: '#ff4949',
        textAlign: 'center',
        fontWeight: '900'
    },
    borderButton: {
         alignItems: 'center', 
         justifyContent: 'center', 
         marginTop: 50, 
         borderWidth: 1, 
         borderColor: 'orange',
         borderRadius: 5,
         padding: 10,
         marginLeft: 30,
         marginRight: 30,
    }
});
