import React, {Component} from 'react';
import Login from './screens/Login';
import Chat from './screens/Chat';
import {AppRegistry} from 'react-native';
class App extends Component {
    render() {
        return (
            <Login />
        );
    }
}
AppRegistry.registerComponent('chat_firebase', () => App);