
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  ScrollView,
  StatusBar 
} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { SBHeaderStyle, headerProp } from '../config/Config';
import { Card, List, ListItem, SearchBar } from 'react-native-elements';
import moment from 'moment';

export default class SessionScreen extends Component {
    
    static navigationOptions = ({ navigation }) => { 
      
      const header = headerProp(navigation);
  
      header.headerLeft = <TouchableHighlight  
          underlayColor='transparent'  
          onPress={() => navigation.goBack()}
          >
          <Icon 
              name='angle-left'  
              size={25} 
              style={{  color: 'white',marginLeft:20}}
          />
          </TouchableHighlight>;
      header.headerRight = <View
          style={{ marginLeft: 20 }}
          />;
      header.headerTitle = 'Sessions';
  
      return (header);   
    };
  
      constructor(props){
          super(props);
          this.state={
              isLoading:true,
              session_data:'',
          }

      }
  
      componentDidMount() {
          const {state} = this.props.navigation;
          console.log(state.params) 
          this.setState({
              session_data: state.params.sdata,
              isLoading:false
          }) 
      }

  
    render() {

        const sessions = this.state.session_data;

       if(this.state.isLoading)
            return (  
               <View><ActivityIndicator /></View>      
            );

        return (
            <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
            <View>
                <List containerStyle= {{marginTop:0, paddingTop:0}}>
                {
                    sessions.map((data, i) => {
                    return (
                        <ListItem 
                        roundAvatar
                        key={data.event_id}
                        title={
                                <View style={styles.subtitleView}>
                                <Text style={{ color: 'black'}}>{ data.fullname }</Text>
                                <Text style={styles.ratingText}>{ data.event_name }</Text>
                                <Text style={styles.ratingText}>{ moment.unix(data.start_date).format('DD-MM-YYYY, h:mm A') }</Text>
                                </View>
                            }
                        avatar={{ uri: data.img_url }}
                        avatarStyle={{ borderRadius: 0, width: 80, height: 80 }}    
                        rightIcon = {<Icon />}           
                    />       
                    );
                    })
                }                  
                </List>
            </View>
            </ScrollView>
            );
    }
  }

  const styles = StyleSheet.create({
    subtitleView: {
        paddingLeft: 10,
      }, 
      ratingText: { 
        color: 'grey'
      }
    });
  

  