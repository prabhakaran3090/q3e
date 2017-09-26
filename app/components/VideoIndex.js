import React, { Component } from 'react';
import { View, Text, StatusBar, ListView, TouchableHighlight, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { _ } from 'lodash';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { SBHeaderStyle, headerProp } from '../config/Config';
import { VP } from '../actions/courses';
 
class VI extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props); 
    }

    componentWillMount() {
        const { id } = this.props.screenProps;
        const data = _.remove(_.map(this.props.screenProps.index.BI, function (v) {
            return _.map(v.data.videos, function (d) { 
                return { 
                    id,
                    name: v.title + ' ' + d.title,
                    source: d.source
                }
            })
        }), function (n) {
            return _.size(n) != 0;
        });
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }); 
        this.dataSource = ds.cloneWithRows([].concat.apply([], data));
    }

    renderRow(data, s, i) {
        const { container, indexBox, textBox, downBox } = styles;

        return (
            <TouchableOpacity onPress={() => this.props.VP(data)} >
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
            </TouchableOpacity >
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

export default connect(null, { VP })(VI);
