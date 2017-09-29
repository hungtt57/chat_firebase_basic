/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import firebase from 'firebase';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

const config = {
    apiKey: "AIzaSyCqnc15DKCz9sZRDLCiqblYYszwnyV493o",
    authDomain: "chat-firebase-basic.firebaseapp.com",
    databaseURL: "https://chat-firebase-basic.firebaseio.com",
    projectId: "chat-firebase-basic",
    storageBucket: "chat-firebase-basic.appspot.com",
    messagingSenderId: "164385664533"
};
firebase.initializeApp(config);

export default class chat_firebase extends Component {
    constructor() {
        super();

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    state = {
        logged: false,
        animating: false
    };
    handleLogin = () => {
        if (!this.state.logged) {
            LoginManager.logInWithPublishPermissions(['publish_actions']).then((result) => {
                if (result.isCancelled) {
                    alert('Cancel Login');
                }
                this.setState({logged: true});
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        alert(data.accessToken.toString())
                    }
                )

            }).catch(error => console.log(error));
        } else {
            this.setState({logged: false});
            LoginManager.logOut();
        }
    }

    onLogin = async () => {
        try {
            this.setState({
                animating: true
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await  firebase.auth().signInWithCredential(credential);
            this.setState({
                logged:true,
                animating: true
            });
            var uid = user.uid;
            firebase.database().ref('/users/'+uid+'/profile').set({
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL
            });


        } catch (error) {
            this.setState({
                animating: false
            });
            console.log(error.message);
            //do something here
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
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#ddd"
                    size="large"
                />
                    {/*<LoginButton*/}
                        {/*publishPermissions={["publish_actions"]}*/}
                        {/*onLoginFinished={*/}
                            {/*(error, result) => {*/}
                                {/*if (error) {*/}
                                    {/*alert("login has error: " + result.error);*/}
                                {/*} else if (result.isCancelled) {*/}
                                    {/*alert("login is cancelled.");*/}
                                {/*} else {*/}
                                    {/*AccessToken.getCurrentAccessToken().then(*/}
                                        {/*(data) => {*/}
                                            {/*alert(data.accessToken.toString())*/}
                                        {/*}*/}
                                    {/*)*/}
                                {/*}*/}
                            {/*}*/}
                        {/*}*/}
                        {/*onLogoutFinished={() => alert("logout.")}/>*/}
                    <TouchableOpacity
                        onPress={this.onLogin}
                        style={{
                            marginTop: 10,
                            padding: 10,
                            backgroundColor: 'green',
                            borderRadius: 5

                        }}
                    >
                        <Text style={{color: 'white'}}> {this.state.logged ? 'Đăng xuất' : 'Đăng nhập'}</Text>
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
        fontFamily: 'Cabo Slab Regular',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontFamily: 'Cabo Slab Italic',
    },
});

AppRegistry.registerComponent('chat_firebase', () => chat_firebase);
