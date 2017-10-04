import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
class Login extends  Component {
    componentDidMount() {
        console.log('ComponentDidMount',this.props);
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'red'}}> Login</Text>

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        logged:state.authentication.loggedIn,
        user : state.authentication.user
    };
};
export  default connect(mapStateToProps)(Login);