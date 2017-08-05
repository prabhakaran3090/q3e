import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import ChapterView from './ChapterView';
import VideoIndex from './VideoIndex';
import Description from './Description';
import { SBHeaderStyle, headerProp } from '../config/Config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});

export default class BookIndex extends Component {
  static navigationOptions = ({ navigation }) => {

    const header = headerProp(navigation);

    header.headerLeft = <TouchableHighlight
      underlayColor='transparent'
      onPress={() => { navigation.goBack() }}
    >
      <Icon
        name='arrow-left'
        size={25}
        style={{ color: 'white', marginLeft: 20 }}
      />
    </TouchableHighlight>;

    header.headerRight = <View
      style={{ marginLeft: 20 }}
    />;
    header.headerTitle = 'Memory Mapping and Peripheral Interfacing';

    return (header);
  };


  static title = 'Scrollable top bar';
  static appbarElevation = 0;

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Chapters' },
      { key: '2', title: 'Videos' },
      { key: '3', title: 'Description' }       
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <ChapterView />;
    case '2':
      return <VideoIndex />;
    case '3':
      return <Description />;
    case '4':
      return <View style={[ styles.page, { backgroundColor: '#2196f3' } ]} />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}