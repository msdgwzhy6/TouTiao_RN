import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import {StackNavigator} from 'react-navigation';

export const NewsNavigator= StackNavigator({
    List:{
        screen:ListScreen
    },
    Detail:{
        screen:DetailScreen
    }
});