import React, { Component } from 'react';
import { 
  View, 
  ScrollView,
  TouchableOpacity,
   WebView,Text,
   TouchableHighlight
} from 'react-native';   
import HTMLView from 'react-native-htmlview'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

import { SBHeaderStyle, headerProp } from '../config/Config';

class Description extends Component { 

  static navigationOptions = ({ navigation }) => {

    const header = headerProp(navigation);

    header.headerLeft =  <TouchableHighlight
      underlayColor='transparent'
      onPress={() => { navigation.goBack() }}
    >
      <Icon
        name='chevron-left'
        size={25}
        style={{ color: 'white', marginLeft: 20 }}
      />
</TouchableHighlight>;

    header.headerRight = <View 
        style={{ marginLeft: 20 }}
      />;
    header.headerTitle = 'Description';

    return (header);
  };
 

  render() {   
    const { params } = this.props.navigation.state;   
        return (    
                  <View style={{ flex: 1 }}>
                    <WebView
                      source={{ html: params.outline }}  
                      style={{ paddingTop: 20  }}
                      allowsInlineMediaPlayback
                    />
                  </View>        
      );
  }
}

const styles = {
  p: {
    margin: 0, 
    padding: 0
  }
};

export default Description;
