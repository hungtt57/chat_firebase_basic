import React, {Component} from 'react';
import {View, Text,ActivityIndicator,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {loginSuccess} from "../../actions/Authenticate";
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCqnc15DKCz9sZRDLCiqblYYszwnyV493o",
    authDomain: "chat-firebase-basic.firebaseapp.com",
    databaseURL: "https://chat-firebase-basic.firebaseio.com",
    projectId: "chat-firebase-basic",
    storageBucket: "chat-firebase-basic.appspot.com",
    messagingSenderId: "164385664533"
};
firebase.initializeApp(config);

class Login extends Component {

    constructor() {
        super();

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }
    static navigationOptions = {
        header: null
    };
    state = {
        logged: false,
        animating: false,
        error : ''
    };
    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error : ''
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if(result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await  firebase.auth().signInWithCredential(credential);
            this.setState({
                logged: true,
                animating: false,
                error : ''
            });
            //
            this.props.loginSuccess(user);
            let uid = user.uid;
            firebase.database().ref('/users/' + uid + '/profile').set({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            });


        } catch (error) {
            this.setState({
                animating: false,
                error : error.message
            });

            //do something here
        }


    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#ddd"
                    size="large"
                />
                {
                    this.state.error ? (
                            <Text style={styles.error}> {this.state.error}</Text>
                        ) : null

                }
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3b5998',
                        borderRadius: 5
                    }}
                >
                    <Text style={{color: 'white'}}> Login with Facebook</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    error : {
        fontSize:18,
        color :'red'
    }
}
const mapStateToProps = (state) => {
    return {
        logged: state.authentication.loggedIn,
        user: state.authentication.user
    };
};
export default connect(mapStateToProps,{loginSuccess})(Login);