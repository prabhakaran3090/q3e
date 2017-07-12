import React, { Component } from 'react';
import { ActivityIndicator,Button, View, Text,Alert, Image, TextInput, ScrollView, TouchableHighlight, ListView,StatusBar } from 'react-native';

export default class ForumDiscussion extends Component {
  
    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        //  console.log(state.params.discussion_data)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        load:true,
        text: '',
        dataSource: ds.cloneWithRows(state.params.discussion_data),
        };

        this._renderRow = this._renderRow.bind(this);
       
    }

  _renderRow(data) {
     console.log(data)
if(data != 'No records found')
        {

        var d = new Date(data.created);
        var formattedDate = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
        var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes;
        formattedDate = formattedDate + " " + formattedTime;


           //const d = new Date(data.created * 1000).toDateString();      //convert timestamp to string

            const regex = /(<([^>]+)>)/ig
            const body = data.message;
            const result = body.replace(regex, "");

    return ( 
        
        <View style={{flexDirection: 'row', padding: 10, marginTop:8}}>
            <View style={{marginLeft: 5 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image source={{uri: 'http://www.tenet.res.in/picture/136EE_user.png'}}
                           style={{width: 40, height: 40}} />
                    <View style={{ flexDirection: 'column', marginLeft:10 }}>          
                            
                        <Text style={{ fontSize: 16, color: 'black',fontWeight: 'bold' }}>
                        {data.firstname}
                        </Text> 
                    
                        <Text style={{ fontSize: 13 }}>
                        {formattedDate}
                        </Text>
                    
                    </View>  
                </View>

                <View style={{paddingTop:10}}>
                    <Text style={{fontSize:15,padding:3,color:'black'}}> {result}</Text>
                </View>
            </View>                
        </View>    

              
    );

     }
        else
        {
            return (<Text style={{fontWeight: 'bold',textAlign:'center',color:'#34495e',paddingTop:150,fontSize:18}}>{data}</Text>);
        }
  }


 _handlePress() {
     const {state} = this.props.navigation;

     fetch("http://10.21.2.45:8001/app/discussion/reply", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userid: '54205',
            discussionid: state.params.discussionid,
            message:this.state.message,
        })
    })

        .then((response) => response.json())
        .then((responseData) => {
            
        const dss = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: dss.cloneWithRows(responseData),
            message:'',
            load:true
        })
        })
        .done();

        
}



  render() {
  
  if(this.state.load)
{
const {state} = this.props.navigation;
    return (
      
       
     <View style={{flex:1}}>

        <ScrollView style={{marginBottom:50, backgroundColor:'#fff'}}
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{        
                    this.scrollView.scrollToEnd({animated: true});
                }}>
            <View style={{flexDirection:'row', paddingTop:20,paddingLeft:20,paddingRight:20 }}>
                <Text style={{fontSize:16,fontWeight: 'bold',color:'#1abc9c'}}>Topics:  </Text>
                <Text style={{fontSize:16,paddingRight:10,fontWeight: 'bold',color:'black'}}> { state.params.subject} </Text>
            </View>
               
                <ListView 
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}  
                />
   
         </ScrollView> 
      
         <View style={{flexDirection:'row', position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:'#d3d3d3',padding:8}}>
                <View style={{width:300}}>
                    <TextInput 
                    placeholder="Reply" 
                    underlineColorAndroid='transparent' 
                    style={{backgroundColor:'#fff', borderWidth: 3, padding: 0, marginLeft: 10, marginRight: 10, paddingLeft: 10, borderRadius: 5, borderColor: '#e5e5e5',fontSize:16 }} 
                    onChangeText={(text) => this.setState({message:text})}
                    value={this.state.message}
                    />
                </View>
                <View>
                    <Button 
                        title="Reply"
                        color="orange"
                        onPress={() => this._handlePress()}
                    />
                </View>
                    
             </View>   
            
       </View>

    );
}

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

