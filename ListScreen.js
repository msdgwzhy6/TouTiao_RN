import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ToastAndroid,
    RefreshControl,
    ActivityIndicator,
    TouchableNativeFeedback
} from 'react-native';
import LoadMoreFooter from './LoadMoreFooter';

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [{
                key: 1,
                title: 'aaaaaa',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 2,
                title: 'basdsad',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 3,
                title: 'sadad',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 4,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 5,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 6,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 7,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 8,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 9,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 10,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 11,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 12,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 13,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 14,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 15,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }, {
                key: 16,
                title: 'wqeqwew',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            }],
            canLoadMore: true,
            loading: false,
            currentPosition: 0,
            refreshing: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(flatList)=>{this.flatList=flatList}}
                    data={this.state.dataList}
                    renderItem={({item}) => this._renderItem(item)}
                    //onRefresh={()=>this._onRefresh()}
                    //refreshing={this.state.refreshing}
                    onEndReached={()=>this._onEndReached()}
                    onEndReachedThreshold='1'
                    ListFooterComponent={this.state.loading ? LoadMoreFooter : null}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            title="Pull to refresh"
                            colors={['#ee1111']}
                            tintColor="#fff"
                            titleColor="#fff"
                        />
                    }
                />

            </View>
        );
    }

    _renderItem(item) {
        let imagesComponents = item.pictures.map(url => this._renderImage(url));

        return (
            <TouchableNativeFeedback onPress={()=>this._itemPressed(item)}
                                     background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.imagesContainer}>
                        {imagesComponents}
                    </View>
                </View>
            </TouchableNativeFeedback>
        );

    }

    _renderImage(url) {
        return (<Image style={styles.img}
                       source={{uri: url}}
                       resizeMode="cover"/>);
    }

    _itemPressed(item) {
        // this.props.appNavigator.navigate('Detail', item);
        global.appNavigator.navigate('Detail', item);
    }

    _onRefresh() {
        this.setState({
            refreshing: true
        });
        ToastAndroid.show('refresh', ToastAndroid.SHORT);
        setTimeout(() => {
            this.setState({
                refreshing: false,
                dataList: [{
                    key: 111,
                    title: 'extra',
                    pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
                }, {
                    key: 222,
                    title: 'extra2',
                    pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
                }, {
                    key: 333,
                    title: 'extra3',
                    pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg', 'http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
                },]
            });
        }, 3000);
    }

    _onEndReached() {
        if (!this.state.canLoadMore || this.state.refreshing || this.state.loading) {
            return;
        }

        this.setState({
            loading: true
        });

        ToastAndroid.show('loading', ToastAndroid.SHORT);
        setTimeout(() => {
            let newList = this.state.dataList.splice(0);
            newList.push({
                key: 111,
                title: 'extra',
                pictures: ['http://wx2.sinaimg.cn/bmiddle/006qRazely1fgfsx6cv7gj30sg0g04bi.jpg']
            });
            this.setState({
                loading: false,
                dataList: newList
            });
        }, 3000);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    itemContainer: {
        flexDirection: 'column',
        height: 150,
    },
    imagesContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    img: {
        height: 100,
        flex: 1,
        marginHorizontal: 5
    },
    title: {
        marginHorizontal: 10,
        fontSize: 16
    }
});