import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import ListScreen from './ListScreen';
const NewsTab = TabNavigator({
    Multiple:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'综合'
        }
    },
    Internal:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'国内'
        }
    },
    International:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'国际'
        }
    },
    English:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'英语'
        }
    },
    Japanese:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'日语'
        }
    },
    Korean:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'韩语'
        }
    },
    Russian:{
        screen:ListScreen,
        navigationOptions:{
            tabBarLabel:'俄语'
        }
    },

},{
    tabBarPosition:'top',
    swipeEnabled:true,
    tabBarOptions: {
        style: {
            height:49
        },
        activeBackgroundColor:'#ffffff',
        activeTintColor:'#4ECBFC',
        inactiveBackgroundColor:'#ffffff',
        inactiveTintColor:'#aaa',
        scrollEnabled:true
    }
});

export default NewsTab;