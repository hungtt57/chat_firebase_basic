import React,{Component} from 'react';
import {View,Text} from 'react-native';
class ViewGroup extends  Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>ViewContact contact</Text>
            </View>
        )
    }
}
export default ViewGroup