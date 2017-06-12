import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import MainTab from './MainTab';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import {StackNavigator} from 'react-navigation';

export const AppNavigator = StackNavigator({
    Main:{
        screen: MainTab
    },
    Detail:{
        screen:DetailScreen
    }
});