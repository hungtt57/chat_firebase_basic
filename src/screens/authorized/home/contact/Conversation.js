import React,{Component} from 'react';
import {View,Text,
    FlatList,
    Image,
    ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';
import { findRoomByUser,sendMessage } from '../../../../actions';
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
class Conversation extends  Component {
    static navigationOptions =  ({navigation}) => ({
            title: `${navigation.state.params.friend.displayName}`,
            tabBarVisible: false
    });
    componentWillMount() {
        const {me} = this.props;
        const {friend} = this.props.navigation.state.params;
        this.props.findRoomByUser(me, friend);

            //
            // this.setState({
            //     messages: [
            //         {
            //             _id: 1,
            //             text: 'Hello developer',
            //             createdAt: new Date(),
            //             user: {
            //                 _id: 2,
            //                 name: 'React Native',
            //                 avatar: 'https://facebook.github.io/react/img/logo_og.png',
            //             },
            //         },
            //     ],
            // });

    }
    onSend = (messages = []) => {
      console.log('onSend',messages);
      const {me,roomKey} = this.props;
        const {friend} = this.props.navigation.state.params;
      this.props.sendMessage(me,friend,messages[0].text,roomKey);
    };
    render() {
        if(this.props.loading) {
            return (
              <View style={styles.containerIndicator}>
                  <ActivityIndicator size="large" color="purple" animating />
              </View>
            );
        }
        return (
            <View style={styles.container}>
               <GiftedChat
                messages={this.props.messages}
                user={{
                    _id : this.props.me.uid
                }}
                onSend={this.onSend.bind(this)}
               />
            </View>
        )
    }
}

const styles = {
    containerIndicator : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container : {
        flex:1,
    }
}
export default connect(
    state => ({
        me:state.authentication.user,
        loading : state.chat.loading,
        messages : state.chat.messages,
        roomKey : state.chat.roomKey
    }),{ findRoomByUser ,sendMessage}
) (Conversation) ;