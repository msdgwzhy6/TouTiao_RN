import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

export default class LoadMoreFooter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.footer}>
                <ActivityIndicator color={'#ee1111'}/>
                <Text>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    }
});