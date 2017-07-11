import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

var dayys = [{"created":'2017-07-22',"event":'Event 1',"count":1},
             {"created":'2017-07-23',"event":'Event 2',"count":2},
             {"created":'2017-07-27',"event":'Event 3',"count":1},
             {"created":'2017-07-28',"event":'Event 4',"count":1},
             {"created":'2017-08-08',"event":'Event 5',"count":2},
             {"created":'2017-08-28',"event":'Event 5',"count":1},
             {"created":'2017-09-02',"event":'Event 5',"count":2}];


export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
   
    this.onDayPress = this.onDayPress.bind(this);
    this.markdates = this.markdates.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
 
  return {
    title: 'Events',
    headerLeft: (
      <Icon name="bars" 
            size={30} 
            color="#1abc9c" 
            style={{padding:10}}
            onPress={() => navigation.navigate('DrawerOpen')} /> 
  ),
  };
}; 

  render() {
   
    return (
      <ScrollView style={styles.container}>
       
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={this.markdates(dayys)}
          theme={{
          todayTextColor: 'red',       //current day color
          dayTextColor: '#2d4150',     // all day color
        }}      
        />
        
       
      </ScrollView>
    );
  }

markdates(data){

    const arr={};
    for(let d of data){
    arr[d.created] = {marked: true};
    }

    return arr;

}


onDayPress(day) {
    const { navigate } = this.props.navigation;

    navigate('Agenda',{current_date:day.dateString, days: dayys });

        this.setState({
          selected: day.dateString
        });
      }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
    marginTop:15
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
    marginTop:35,
    color:'#1abc9c',
    fontSize:16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});







