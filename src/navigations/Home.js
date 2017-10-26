import {TabNavigator} from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';
import {Image} from 'react-native';
import React from 'react';
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
    navigationOptions : {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/icons/home.png')}
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
export default Home;