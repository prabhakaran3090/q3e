import React, { Component } from 'react';
import { 
  ActivityIndicator, 
  View, 
  Text, 
  Image, 
  TextInput, 
  ScrollView, 
  TouchableHighlight, 
  ListView,
  StatusBar,
  Alert 
} from 'react-native';

import { Card, List, ListItem, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { SBHeaderStyle, headerProp } from '../config/Config';

export default class courselist extends Component {
     static navigationOptions = ({ navigation }) => { 
                                
            const header = headerProp(navigation); 
            header.headerRight = null;
            header.headerTitle = 'Courses';
            header.drawerLabel = 'Forum';
            header.drawerIcon =  ({ tintColor }) => (
              <MaterialIcons
                name="forum"
                size={24}
                style={{ color: tintColor }}
              />
            );

            return (header);
};
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: '',
      response_data:'',
      emptySearch:1
    }

    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }


  componentDidMount() {

   return fetch('http://10.21.2.45:8001/app/courselist/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
          response_data: responseJson
        }, function() {
        });
      })
      .catch((error) => {
        Alert.alert("Network Not Reachable. Try Again");
        });
    
  }

  _renderRow(data) {

    return ( 
      
          <ListItem
          roundAvatar
          key={data.id}
          title={data.fullname}
          titleStyle={{fontSize: 13, fontWeight: 'bold'}} 
          onPress={() => this._pressRow(data) }
          />
 
      
    );
  }

_pressRow( course){
   
    const { navigate } = this.props.navigation;
    const url = 'http://10.21.2.45:8001/app/forum/'+course.id ;
    fetch(url, {
    method: 'GET',
    })
    .then((response) => { return response.json() } )                     //Fetch and passing data
    .then((responseJson) => {
      console.log(responseJson);
    navigate('Forum', { forum_data: responseJson });
    })
    
}

filterSearch(text){

      const course_data = this.state.response_data;

      const newData = course_data.filter(function(item){
      const itemData = item.fullname.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })

    
      this.state.dataSource = this.state.dataSource.cloneWithRows(newData);
      this.setState({
          emptySearch:newData,
          text: text
      })
    

}

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
  if(this.state.emptySearch.length == 0){
    return(
    <View style={{flex: 1, padding: 2}}>
            
          <SearchBar
            lightTheme
            round
            onChangeText={(text) => this.filterSearch(text)}
            clearIcon
            textInputRef='none'
            placeholder='Type Here...' />       

            <Text style={{textAlign:'center',fontSize:20,marginTop:10,color:'black',padding:6}} >No results found</Text>
          
  </View>
    )
  }
    return (
      
            <View style={{flex: 1, padding: 2}}>
          
                    <SearchBar
                      lightTheme
                      round
                      onChangeText={(text) => this.filterSearch(text)}
                      clearIcon
                      textInputRef='none'
                      placeholder='Type Here...' />
                  
                <List containerStyle={{padding:0, marginTop:0}}>
                                    <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}  
                  />  
                  </List>      
                    
            </View>

    );
  }
}


const styles = {
    box:{
        flexDirection: 'row', 
        borderWidth: 1, 
        padding: 10,
        backgroundColor: '#fff',
        margin:3,
        }
}

