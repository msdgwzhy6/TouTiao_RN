import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ToastAndroid
} from 'react-native';

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
            loading: false,
            currentPosition: 0,
            refreshing: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={({item}) => this._renderItem(item)}
                    onRefresh={()=>this._onRefresh()}
                    refreshing={this.state.refreshing}
                    onEndReached={()=>this._onEndReached()}
                    onEndReachedThreshold='0.5'
                />
            </View>
        );
    }

    _renderItem(item) {
        let imagesComponents = item.pictures.map(url => this._renderImage(url));

        return (<View style={styles.itemContainer}>

            <Text style={styles.title} onPress={()=>this._itemPressed(item)}>{item.title}</Text>
            <View style={styles.imagesContainer}>
                {imagesComponents}
            </View>
        </View>);

    }

    _renderImage(url) {
        return (<Image style={styles.img}
                       source={{uri: url}}
                       resizeMode="cover"/>);
    }

    _itemPressed(item) {
        this.props.appNavigator.navigate('Detail', item);
    }

    _onRefresh() {
        this.setState({
            refreshing: true
        });
        ToastAndroid.show('refresh', ToastAndroid.SHORT);
        setTimeout(() => {
            this.setState({refreshing: false})
        }, 3000);
    }

    _onEndReached() {
        ToastAndroid.show('loadmore', ToastAndroid.SHORT);
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