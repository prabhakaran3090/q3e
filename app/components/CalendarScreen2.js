import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
     const {state} = this.props.navigation;
   // console.log(state.params)
    this.state = {
      items: {},
      current_date:state.params.current_date,
      listdate: state.params.days
    };

    this.loadItems = this.loadItems.bind(this);
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems(this.state.listdate)}
        selected={this.state.current_date}
        renderItem={this.renderItem.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        // monthFormat={'yyyy'}
        //theme={{calendarBackground: 'red'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(listdate) {

    for(let d of listdate){
       const strTime = d.created;
       const strEvent = d.event;
       const strEventCount = d.count;
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = strEventCount;   // counts

          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              event: strEvent,
              height: 50
            });
          }
        }

  } 
  
        
  }

  renderItem(item) {

    return (
      <View style={{marginTop:100,height: item.height}} ><Text>{item.event}</Text></View>
    );
  }

 
  renderEmptyDate() {
    return (
      <View ><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.event !== r2.event;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

