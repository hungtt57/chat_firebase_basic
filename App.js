/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,TouchableOpacity
} from 'react-native';
import {LoginButton,AccessToken,LoginManager} from 'react-native-fbsdk';

export default class chat_firebase extends Component {
    state = {
        logged : false
    };
    handleLogin = () => {
        if(!this.state.logged) {
            LoginManager.logInWithPublishPermissions(['publish_actions']).
            then((result) => {
                if(result.isCancelled) {
                    alert('Cancel Login');
                }
                    this.setState({logged:true});
                     AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        alert(data.accessToken.toString())
                    }
                )

            }).catch(error => console.log(error));
        } else {
            this.setState({logged:false});
            LoginManager.logOut();
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        alert(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}/>
                <TouchableOpacity
                    onPress={this.handleLogin}
                    style={{
                        marginTop :10,
                        padding:10,
                        backgroundColor:'green',
                        borderRadius : 5

                    }}
                >
                    <Text style={{color:'white'}}> {this.state.logged ? 'Đăng xuất' : 'Đăng nhập'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('chat_firebase', () => chat_firebase);
