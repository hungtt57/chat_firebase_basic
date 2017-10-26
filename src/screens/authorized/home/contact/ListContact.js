import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {DrawerButton} from "../../../../components";

class ListContact extends  Component {

    static navigationOptions = ({navigation}) => ({
        title  : 'List contact',

        headerLeft: (<View><DrawerButton navigation={navigation} /></View>),
        headerRight : null
    });

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>List contact</Text>
                <Button onPress={() => this.props.navigation.navigate('Add')} title='GOto add'></Button>
            </View>
        )
    }
}
export default ListContact