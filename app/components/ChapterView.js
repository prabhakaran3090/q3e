import React, { Component } from 'react';
import { View, Text, StatusBar, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
 

class ChapterView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() { 
       const data = [
        { name: 'Memory Mapping and Peripheral Interfacing '},
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer' },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer' },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer', isHead: true },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer' },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer' },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer', isHead: true },
        { name: 'Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers' },
        { name: 'Introduction to Convection Heat Transfer - Heat Transfer' }];
       const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(data);
  }

  renderRow(data, s, i) {      
      const { container, indexBox, textBox } = styles; 
      var styleSheet = {};

      if (data.isHead) {
         styleSheet.head = { backgroundColor: '#2196F3' }; 
         styleSheet.text = { color: 'white' };
         styleSheet.border = { borderColor: '#2196F3' };
      }
    return ( 
        <TouchableOpacity style={[container, styleSheet.head]} onPress={() => this.props.chapterContentView()} >
            <View style={[indexBox, styleSheet.border]}>
                <Text style={styleSheet.text}>{ Number(i) + 1 }</Text>
            </View>            
            <View style={textBox}>
                <Text style={styleSheet.text}>{data.name}</Text>
            </View>      
        </TouchableOpacity>
    );
  }    
    render() {
        return (
            <View>
                <ListView 
                  dataSource={this.dataSource}
                  renderRow={this.renderRow.bind(this)} 
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row', 
        borderBottomWidth: 1,
        borderColor: '#f6f6f6',
        flex: 1,
    },
    indexBox: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#f6f6f6',
        padding: 10,
    },
    textBox: {
        flex: 5, 
        padding: 10, 
    }
};

export default ChapterView;
