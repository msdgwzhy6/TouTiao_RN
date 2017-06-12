import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DetailScreen extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <View>
                <Text>
                    {JSON.stringify(this.props.navigation.state.params)}
                </Text>
            </View>
        );
    }
}