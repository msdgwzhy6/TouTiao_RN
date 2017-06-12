import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ListScreen2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text>
                    {this.props.type}
                </Text>
            </View>
        );
    }
}