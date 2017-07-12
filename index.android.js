/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import {AppContent} from './app/config/Router';

const App = () =>
  <View style={{flex: 1}}>
    <StatusBar  backgroundColor={'rgba(0, 0, 0, 0.18)'} translucent  /> 
   <AppContent />
 </View>; 
AppRegistry.registerComponent('navigation', () => App);
