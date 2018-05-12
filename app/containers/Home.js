import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions, createAction, Storage } from '../utils'

const width = Dimensions.get('window').width;
@connect(({ app, home }) => ({ ...app, ...home }))
class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
                source={require('../images/house.png')}
            />
        ),
    }

    componentDidMount = () => {
       
        this.props.dispatch(createAction('home/axiosGdGet')())
        this.props.dispatch(createAction('home/fetchGdGet')({}))
    }
    render() {
        const {
            axiosGdData,
            fetchGdGetData,
        } = this.props;
        console.log(fetchGdGetData)
        return (
            <View style={styles.container}>
                <Text>首页</Text>
                
                <TouchableOpacity
                    onPress={() => {
                        this.props.dispatch(createAction('app/requestNet')({}))
                        }
                    }
                >
                    <Text>
                        请求网络
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={fetchGdGetData}
                    keyExtractor={(item, index) => {}}
                    renderItem={
                        this.renderItem.bind(this)
                    }
                />
                <View style={{ width: width, height: 3, backgroundColor: 'red' }}></View>
                <FlatList
                    data={axiosGdData}
                    keyExtractor={(item, index) => item.key}
                    renderItem={
                        this.renderItem.bind(this)
                    }
                />
            </View>
        )
    }

    /**
     * 渲染视图
     */
    renderItem = ({ item, index }) => {
        console.log(item);
        return (
            <TouchableOpacity
               key={'index'+index}
                onPress={
                    () => {

                    }
                }
            >

                <View style={styles.rowItemView}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemIcon}
                    />
                    <View style={styles.ItemRightView}>
                        <Text>{item.iftobuy}</Text>
                        <Text numberOfLines={2}>
                            {item.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
    rowItemView: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 60,
        height: 60,
    },
    ItemRightView: {

        flex: 1,
        justifyContent: 'center',
    }

})

export default Home
