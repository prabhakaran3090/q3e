import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Image, TextInput, ScrollView, TouchableHighlight, ListView,StatusBar } from 'react-native';

import { Card, List, ListItem } from 'react-native-elements'

export default class ForumList extends Component {
  constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
       
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        
        text: '',
        dataSource: ds.cloneWithRows(state.params.forum_data),
        };

        this._renderRow = this._renderRow.bind(this);
        this._pressRow = this._pressRow.bind(this);
    }


  _renderRow(data) {
        if(data != 'Forum not found for the particular course')
        {

        const d = new Date(data.timemodified * 1000).toDateString();
        const total = '( '+data.tot+' )';
        return ( 

         <Card containerStyle={{padding:0,marginBottom:-14,marginRight:2,marginLeft:2,bottom:12}}>
          <ListItem
          roundAvatar
          key={data.id}
          title={data.name}
          titleContainerStyle={{width:280,paddingBottom:5}}
          subtitle={d}
          rightTitle= {total}
          onPress={() => this._pressRow(data) }
          />

      </Card>
                      
    );

     }
        else
        {
            return (<Text style={{fontWeight: 'bold',textAlign:'center',color:'#34495e',paddingTop:200,fontSize:18}}>{data}</Text>);
        }
  }

 _pressRow(forum){
       
    const { navigate } = this.props.navigation;
    const url = 'http://10.21.2.45:8001/app/discussionlist/'+forum.id ;
   
    fetch(url, {
    method: 'GET',
    })
    .then((response) => { return response.json() } )                     //Fetch and passing data
    .then((responseJson) => {
    navigate('ForumTopics', { forumtopics_data: responseJson });
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

    return (
     
            <View style={{flex: 1, padding: 2 }}>
                                
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

