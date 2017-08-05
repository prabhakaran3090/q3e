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
        name='arrow-left'
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
    const html = `<span class="cs-er-hd-txt">
                    <p><strong>Topic Name</strong>: Connections</p>
                    <p><strong>Relevant Course:&nbsp;</strong>Design of Steel Structures</p>
                    <p><strong>Relevant Department : </strong>Civil Engineering&nbsp;</p>
                    <p><strong>Relevant Semester:</strong> 6<sup>th</sup> Semester</p>
                    <p><strong>Pre-requisite:</strong>&nbsp;Not required</p>
                    <p><strong>Course Description &amp; Outline :</strong></p>
                    <p><strong>&nbsp;</strong>The Code of Practice for General Construction in Steel in India IS 800:2007 has been revised into Limit State Method. A thorough understanding of the new provisions and their background is required to use the Standard efficiently and effectively. Design of members in tension, compression, flexure and connections will be covered in this module on Basic Design of Steel Structures.</p>
                    <ol>
                    <li>Limit State Method and Design of tension members</li>
                    <li>Column Buckling and Design of compression members</li>
                    <li>Local Buckling and section classification</li>
                    <li>Design of beams</li>
                    <li>Design of welded and bolted connections</li>
                    <li>Tutorial</li>
                    </ol>
                  </span>  
                  `;
        return (    
                  <View style={{ flex: 1 }}>
                    <WebView
                      source={{ html }}  
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
