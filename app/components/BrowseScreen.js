
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  ListView
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import { SBHeaderStyle, headerProp } from '../config/Config';
import { getCourses, selectBook, viewBook } from '../actions/courses'; 

class BrowseScreen extends Component {
 
 static navigationOptions = ({ navigation }) => {  
    const header = headerProp(navigation); 
    header.headerRight =  <View style={{ marginRight:20}} />;
    header.headerTitle = 'My Courses';

    return (header);
  };

constructor(props){
  super(props) 
}

 componentDidMount() {  
   this.props.getCourses(7);
 }
 
 objectLength(obj) {
   var size = 0, key;
   for (key in obj) {
     if (obj.hasOwnProperty(key)) size++;
   }
   return size;
 }

 selectCourse(id) {  
   this.props.navigation.navigate('CourseMain', { id }); 
 }

 renderRow(rowData, sectionID) {   
   const img = (rowData.img_url == '') ? require('../assets/images/img404_sm.jpg') : {uri : rowData.img_url};
   
   return (
     <ListItem 
       roundAvatar
       title={rowData.name}
       subtitle={
         <View style={styles.subtitleView}>
           <Text style={styles.ratingText}>{ rowData.fname + ' ' + rowData.lname }</Text>
         </View>
       }
       avatar={img}
       avatarStyle={{ borderRadius: 0, width: 60, height: 60 }}
       titleStyle={{ fontSize: 13, fontWeight: 'bold' }}
       onPress={  () =>  this.props.navigation.navigate('CourseMain', { id:rowData.id })  }
     />
   )
 }

  render() {
    const items = this.props.courses;
    const count = this.objectLength(items); 
    if (count == 0) 
      return(<View></View>);  
    
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(_.values(this.props.courses)),
    };

    return (
      <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
      <View> 
          {/* <SearchBar 
            lightTheme 
            inputStyle ={{ backgroundColor: 'white' }}
          placeholder='Search'  /> */}

          <List containerStyle= {{marginTop:0, paddingTop:0}}>
              <ListView
                renderRow={this.renderRow.bind(this)}
              dataSource={this.state.dataSource} 
              />                   
          </List> 
      </View>
      </ScrollView>
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
mapStateToProps = ({ courses }) => {
  return ({ 
    courses: courses.courses
  })
}


export default connect(mapStateToProps, { getCourses, selectBook })(BrowseScreen);