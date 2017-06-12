import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';
import ListScreen from './ListScreen';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import {NewsNavigator} from './NewsNavigator';

export default class IndexScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ToolbarAndroid
                    logo={require('./img/jrtt_logo.png')}
                    style={styles.toolbar}/>

                <ScrollableTabView
                    style={styles.tabView}
                    tabBarUnderlineStyle={{height:0}}
                    tabBarTextStyle={styles.tabBarText}
                    tabBarActiveTextColor="#ee1111"
                    tabBarInactiveTextColor="#000000"
                    renderTabBar={() => <ScrollableTabBar style={styles.tabBar}/>}>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'Multiple'}} type="Multiple" tabLabel="综合"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'Internal'}} type="Internal" tabLabel="国内"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'International'}} type="International" tabLabel="国际"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'English'}} type="English" tabLabel="英语"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'Japanese'}} type="Japanese" tabLabel="日语"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'Korean'}} type="Korean" tabLabel="韩语"/>
                    <ListScreen appNavigator = {this.props.appNavigator} screenProps={{type:'Russian'}} type="Russian" tabLabel="俄语"/>
                </ScrollableTabView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    toolbar: {
        height: 46,
        backgroundColor: '#ee1111',
        justifyContent: 'center',
    },
    tabView:{

    },
    tabBar:{
        height:35,

    },
    tabBarText: {
        fontSize:16,
        marginTop:-12
    }
});