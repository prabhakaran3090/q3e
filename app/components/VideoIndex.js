import React, { Component } from 'react';
import { View, Text, StatusBar, ListView, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { _ } from 'lodash';
import { NavigationActions } from 'react-navigation';

import { SBHeaderStyle, headerProp } from '../config/Config';

class ChapterView extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);       
    }

    componentWillMount() { 
        const data = _.map(this.props.screenProps.videos, function (v) {
            return {
                name: v.title
            }
        });
       const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
       });

       this.dataSource = ds.cloneWithRows(data);
  }

  renderRow(data, s, i) {      
      const { container, indexBox, textBox, downBox } = styles; 
    return ( 
        <View style={container}>
            <View style={indexBox}>
                <Text><MaterialIcons
                    name='play-circle-outline'
                    size={24}
                    color='#b9b9b9'
                /></Text>
            </View>           
            <View style={textBox}> 
                <Text>{data.name}</Text>
            </View> 
            {/* <View style={downBox}>
                <Text><Ionicons  
                    name='cloud-download'
                    size={24}
                    color='#b9b9b9'
                /></Text>
            </View>         */}
        </View>
    );
  }    
    render() {
        return (
            <View>
                <ListView 
                  dataSource={this.dataSource}
                  renderRow={this.renderRow} 
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
    downBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#f6f6f6',
        padding: 10,
    },
    textBox: {
        flex: 5, 
        padding: 10,
        paddingRight: 5
    }
};

export default ChapterView;
