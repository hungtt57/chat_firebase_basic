import React,{PropTypes} from 'react';
import {TouchableOpacity,Image} from 'react-native';
import store from '../store';
const propTypes = {
    navigation : PropTypes.object
};
const DrawerButton = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/icons/menu.png')} style={{width:24,height:24}}/>

        </TouchableOpacity>
    );
};
DrawerButton.propTypes = propTypes;
export  {DrawerButton};