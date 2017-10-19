import React, {Component} from 'react';
import Login from './screens/unauthorized/Login';
import Chat from './screens/Chat';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import store from './store';
import AppNavigator from './AppNavigator';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('chat_firebase', () => App);