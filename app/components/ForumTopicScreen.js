import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Image, TextInput, ScrollView, TouchableHighlight, ListView,StatusBar } from 'react-native';

import { List, ListItem } from 'react-native-elements';

export default class ForumList extends Component {
  
    constructor(props)
    {
        super(props);
        
        const {state} = this.props.navigation;
        // console.log(state.params.forumtopics_data)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        
        text: '',
        dataSource: ds.cloneWithRows(state.params.forumtopics_data),
        };

        this._renderRow = this._renderRow.bind(this);
        this._pressRow = this._pressRow.bind(this);
    }

  _renderRow(data) {
  //  console.log(data)
if(data != 'No discussion found for this forum')
        {
           const d = new Date(data.timemodified * 1000).toDateString();
           const tot_replies = data.dis_count+' Replies';
    return ( 
        <List containerStyle={{marginBottom: -18,marginRight:5,marginLeft:5,bottom:15}}>

          <ListItem
          roundAvatar
          key={data.id}
          title={data.name}
          titleContainerStyle={{width:250,paddingBottom:5}}
          subtitle={'by '+data.firstname+'     '+d}
          subtitleContainerStyle={{width:1000}}
          rightTitle={tot_replies}
          rightTitleStyle={{color:'grey'}}
          onPress={() => this._pressRow(data) }
          />

      </List>
                      
    );

     }
        else
        {
            return (<Text style={{fontWeight: 'bold',textAlign:'center',color:'#34495e',paddingTop:150,fontSize:18}}>{data}</Text>);
        }
  }

 _pressRow(forumtopics){
        console.log('ForumTopic id - '+ forumtopics.id);

    const { navigate } = this.props.navigation;
    const url = 'http://10.21.2.45:8001/app/forumposts/'+forumtopics.id ;
    fetch(url, {
    method: 'GET',
    })
    .then((response) => { return response.json() } )                     //Fetch and passing data
    .then((responseJson) => {
    navigate('ForumDiscussion', { discussion_data: responseJson, discussionid: forumtopics.id, subject: forumtopics.name });
    })
    .catch((error) => {
    Alert.alert("Network Not Reachable. Try Again");
    });


}


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
    
            <View style={{flex: 1, padding: 3 }}>
                                    
                  <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}  
                  />        
                    
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

