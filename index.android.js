import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import MainTab from './MainTab';
import {AppNavigator} from './AppNavigator';
import IndexScreen from './IndexScreen';
import VideoScreen from './VideoScreen';
import WttScreen from './WttScreen';
import UserScreen from './UserScreen';
import NewsTab from './NewsTab';


// const MainTabold = TabNavigator({
//     IndexTab: {
//         screen: IndexScreen,
//         navigationOptions: {
//             tabBarLabel: '首页',
//             tabBarIcon: ({focused,tintColor}) => {
//                 if (focused) {
//                     return(
//                         <Image
//                             source={require('./img/icon_index_selected.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }else {
//                     return(
//                         <Image
//                             source={require('./img/icon_index.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }
//             },
//         },
//     },
//     Video: {
//         screen: VideoScreen,
//         navigationOptions: {
//             tabBarLabel: '视频',
//             tabBarIcon: ({focused,tintColor}) => {
//                 if (focused) {
//                     return(
//                         <Image
//                             source={require('./img/icon_video_selected.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }else {
//                     return(
//                         <Image
//                             source={require('./img/icon_video.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }
//             },
//         },
//     },
//     Wtt: {
//         screen: WttScreen,
//         navigationOptions: {
//             tabBarLabel: '微头条',
//             tabBarIcon: ({focused,tintColor}) => {
//                 if (focused) {
//                     return(
//                         <Image
//                             source={require('./img/icon_wtt_selected.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }else {
//                     return(
//                         <Image
//                             source={require('./img/icon_wtt.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }
//             },
//         },
//     },
//     User: {
//         screen: UserScreen,
//         navigationOptions: {
//             tabBarLabel: '我的',
//             tabBarIcon: ({focused,tintColor}) => {
//                 if (focused) {
//                     return(
//                         <Image
//                             source={require('./img/icon_user_selected.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }else {
//                     return(
//                         <Image
//                             source={require('./img/icon_user.png')}
//                             style={[{tintColor: tintColor},styles.icon]}
//                         />
//                     );
//                 }
//             },
//         },
//     },
// }, {
//     tabBarPosition: 'bottom',
//     swipeEnabled:true,
//     animationEnabled:true,
//     backBehavior: 'none',
//     tabBarOptions: {
//         activeTintColor: '#ee1111',
//         inactiveTintColor: '#000000',
//         showIcon:true,
//         activeBackgroundColor:'#ffffff',
//         inactiveBackgroundColor:'#ffffff',
//         lazy:true,
//         indicatorStyle:{
//             height:0,
//         },
//         style:{
//             height:46,
//             backgroundColor:'#efefef',
//             borderTopColor:'#cccccc',
//             borderTopWidth: 0.5,
//         },
//         labelStyle: {
//             fontSize:10,
//             marginTop:-4,
//         },
//     },
// });


const styles = StyleSheet.create({
    icon: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        marginTop:-5,
    },
});

AppRegistry.registerComponent('TouTiao', () => AppNavigator);
