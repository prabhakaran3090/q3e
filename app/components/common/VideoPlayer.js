import React, {
  Component
} from 'react';

import {
  ActivityIndicator,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
  Slider
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video-controls';

const {height, width} = Dimensions.get('window');

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props); 
  } 

  render() { 
    return (<View style={{flex: 1}}>
        <Video
            source={this.props.source} 
            style={styles.fullScreen}
            onBack={ () => this.props.navigation.goBack()}
        />
    </View>);
  
     
  } 
}

const styles = StyleSheet.create({ 
  fullScreen: { 
      flex: 1,
      backgroundColor: 'black'
  }, 
});

