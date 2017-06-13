import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import IndexScreen from './IndexScreen';
import VideoScreen from './VideoScreen';
import WttScreen from './WttScreen';
import UserScreen from './UserScreen';

export default class MainTab extends Component {
    static navigationOptions = {
        header:null
    };
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'首页'
        };
        global.appNavigator = this.props.navigation;
    }
    render() {
        return (
            <View style={styles.container} >
                <TabNavigator>
                    {this._renderTabarItems('首页',require('./img/icon_index.png'),require('./img/icon_index_selected.png'),IndexScreen)}
                    {this._renderTabarItems('视频',require('./img/icon_video.png'),require('./img/icon_video_selected.png'),VideoScreen)}
                    {this._renderTabarItems('微头条',require('./img/icon_wtt.png'),require('./img/icon_wtt_selected.png'),WttScreen)}
                    {this._renderTabarItems('我的',require('./img/icon_user.png'),require('./img/icon_user_selected.png'),UserScreen)}
                </TabNavigator>
            </View>
        );
    }

    _renderTabarItems(tabName,icon,selectedIcon,Component){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tabName}
                title={tabName}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
                onPress={() => this.setState({ selectedTab: tabName })}>
                <Component/>
            </TabNavigator.Item>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    tabText:{
        color:'#000000',
        fontSize:10,
        marginTop:-4
    },
    selectedTabText:{
        color:'#ee1111'
    },
    icon:{
        width:32,
        height:32
    }
});