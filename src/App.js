import React, {Component} from 'react';
import Login from './screens/Login';
import Chat from './screens/Chat';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('chat_firebase', () => App);