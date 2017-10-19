import React,{Component} from 'react';
import {View,Text} from 'react-native';
class ViewChat extends  Component {
    static navigationOptions = {
        title : 'List chat',
    };
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>List contact</Text>
            </View>
        )
    }
}
export default ViewChat