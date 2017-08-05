import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'; 

import { seeMore, selectBook } from '../actions/courses';
import { SBHeaderStyle, headerProp } from '../config/Config';

class CourseOutline extends Component {
    static navigationOptions = ({ navigation }) => {

        const header = headerProp(navigation);

        header.headerLeft = null;
        header.headerRight = null;
        header.headerTitle = 'Topic Outline';

        return (header);
    };

    constructor(props) {
        super(props);
    }

    renderNode(node, index) {
        if (node.name === 'seeall') {
            return (
                <TouchableOpacity onPress={() => this.props.seeMore()}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.buttonSeeAll}>
                            See All
                    </Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }


    render() {
        const { thumbnailStyle } = styles;
        const html = `<p>Session 1: Basic configuration, construction - types, principle of operation, Amp-Turn balance, Ideal transformer,&nbsp; Accounting for core losses - Eddy current and hysteresis losses, revisiting construction - reduction of eddy current losses with laminations; magnetizing current and magnetizing reactance; some worked examples</p>` + `<seeAll></SeeAll>`;
        return (
            <View style={styles.parent}>
                <View>
                    <Image style={thumbnailStyle} source={require('../assets/images/img123.png')} />
                </View>
                <View style={styles.floatView}>
                    <Text style={styles.floatText}>Memory Mapping and Peripheral Interfacing - Microprocessors and Microcontrollers</Text>
                </View>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.WebView}>
                        <View style={styles.heading}>
                            <Text style={styles.headText}>
                                Course Outline
                                </Text>
                        </View>
                        <HTMLView value={html} renderNode={this.renderNode.bind(this)} />
                    </View>
                    <View style={styles.WebView}>
                        <View style={styles.heading}>
                            <Text style={styles.headText}>
                                Delivered by
                                </Text>
                        </View >
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, borderRadius: 50, }} source={require('../assets/images/prabha.jpg')} />
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                <View style={{ paddingBottom: 2 }}>
                                    <Text style={{ fontSize: 15, color: '#2b2b2b', fontWeight: '600' }}>Prabhakaran C.P.</Text>
                                </View>
                                <View >
                                    <Text style={{ fontSize: 13, color: '#2b2b2b' }}>IIT Chennai</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.footer} onPress={() => { this.props.selectBook(); }}>
                    <View >
                        <Text style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>
                            View Book
                                </Text>
                    </View>
                </ TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        marginBottom: 50,
    },
    thumbnailStyle: {
        width: null,
        height: 200,
    },
    floatView: {
        position: 'absolute',
        height: 50,
        // width,
        top: 150,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    parent: {
        flex: 1,
    },
    floatText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center'
    },
    heading: {
        marginTop: 10
    },
    headText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18
    },
    WebView:
    {
        marginTop: 20,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderTopColor: '#eee',
        borderTopWidth: 1,
        paddingTop: 0,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff'
    },
    buttonSeeAll: {
        padding: 10,
        borderWidth: 1,
        color: '#007cab',
        borderRadius: 5,
        borderColor: '#007cab'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        padding: 15,
        backgroundColor: '#f8576b',
        left: 0,
        right: 0,
    },
};

export default connect(null, { seeMore, selectBook })(CourseOutline);
