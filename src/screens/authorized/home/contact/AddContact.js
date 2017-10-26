import React,{Component} from 'react';
import {View,Text} from 'react-native';
class AddContact extends  Component {

    static navigationOptions = ({navigation}) => ({
        tabBarVisible : false
    });
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Add contact</Text>
            </View>
        )
    }
}
export default AddContact