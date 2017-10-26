import {StackNavigator} from 'react-navigation';
import {Image} from 'react-native';
import React from 'react';
import SettingScreen from '../screens/authorized/Setting';
const Setting = StackNavigator({
    Setting : {screen : SettingScreen}
},
    {
        navigationOptions : {
            drawerLabel: 'Setting',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icons/gear.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    });
const styles = {
    icon : {
        width : 30,
        height : 30
    }
};
export default  Setting;