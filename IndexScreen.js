import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    Image,
    TouchableNativeFeedback
} from 'react-native';
import ListScreen from './ListScreen';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';

export default class IndexScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ToolbarAndroid
                    logo={require('./img/jrtt_logo.png')}
                    style={styles.toolbar}/>
                <Image style={styles.addView} source={require('./img/shadow_bg.png')}>
                    <TouchableNativeFeedback onPress={()=>this.setState({isModalVisible:true})}
                                             background={TouchableNativeFeedback.SelectableBackground()}>
                        <Image source={require('./img/icon_add.png')} style={{resizeMode:'contain',width:20,height:20}}/>
                    </TouchableNativeFeedback>
                </Image>
                <ScrollableTabView
                    style={styles.tabView}
                    tabBarUnderlineStyle={{height:0}}
                    tabBarTextStyle={styles.tabBarText}
                    tabBarActiveTextColor="#ee1111"
                    tabBarInactiveTextColor="#000000"
                    renderTabBar={() => <ScrollableTabBar style={styles.tabBar}/>}>
                    <ListScreen screenProps={{type:'Multiple'}} type="Multiple" tabLabel="综合"/>
                    <ListScreen screenProps={{type:'Internal'}} type="Internal" tabLabel="国内"/>
                    <ListScreen screenProps={{type:'International'}} type="International" tabLabel="国际"/>
                    <ListScreen screenProps={{type:'English'}} type="English" tabLabel="英语"/>
                    <ListScreen screenProps={{type:'Japanese'}} type="Japanese" tabLabel="日语"/>
                    <ListScreen screenProps={{type:'Korean'}} type="Korean" tabLabel="韩语"/>
                    <ListScreen screenProps={{type:'Russian'}} type="Russian" tabLabel="俄语"/>
                </ScrollableTabView>

                <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}
                       onModalHide={()=>{this.setState({isModalVisible:false})}}>
                    <View>
                        <Text>Hello!</Text>
                    </View>
                </Modal>
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
        marginTop:-35,
    },
    tabBar:{
        backgroundColor:'#ffffff',
        height:35,
        paddingRight:20,
    },
    tabBarText: {
        fontSize:16,
        marginTop:-12,
    },
    addView:{
        height:35,
        width:45,
        justifyContent:'center',
        alignSelf:'flex-end',
        alignItems:'center',
        zIndex:9,
        opacity:0.95,
        marginBottom:1,
        resizeMode:'stretch',
        paddingLeft:10
    },
    bottomModal: {
        backgroundColor:'#ffffff',
        justifyContent: 'flex-end',
        margin: 0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    }
});