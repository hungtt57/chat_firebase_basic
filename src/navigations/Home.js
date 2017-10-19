import {TabNavigator} from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';

import React from 'react';
import {Image} from 'react-native';
const Home = TabNavigator({
    TabContact: {
        screen: TabContact,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon : ({ tintColor }) => (
                <Image
                    source={require('../img/icons/contact.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    TabChat: {screen: TabChat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon : ({ tintColor }) => (
                <Image
                    source={require('../img/icons/chat.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    TabGroup: {screen: TabGroup,
        navigationOptions: {
            tabBarLabel: 'Group',
            tabBarIcon : ({ tintColor }) => (
                <Image
                    source={require('../img/icons/group.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }

    },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'grey',
        activeBackgroundColor : 'yellow',
        upperCaseLabel: true,
        showIcon: true,
        // indicatorStyle: {
        //     backgroundColor: 'white'
        // },
        style: {
            backgroundColor: '#fff',
        },
    },
});
const styles = {
    icon : {
        width : 30,
        height : 30
    }
};
export default Home;