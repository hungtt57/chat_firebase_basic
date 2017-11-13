import React,{Component} from 'react';
import {View,Text
    ,Button,Image
,TouchableOpacity,FlatList,
    ActivityIndicator
} from 'react-native';
import {DrawerButton} from "../../../../components";
import {connect} from 'react-redux';
import {fetchListContact} from '../../../../actions'
class ListContact extends  Component {

    static navigationOptions = ({navigation}) => ({
        title  : 'List contact',
        headerLeft: (<View><DrawerButton navigation={navigation} /></View>),
        headerRight : null
    });

    componentWillMount() {
        this.props.fetchListContact(this.props);

    }
    // createDataSource({contacts}) {
    //     const ds = new Fl
    // }
    componentWillReceiveProps(nextProps) {

    }
    onRowPressed = (friend) => {
        this.props.navigation.navigate('Conversation',{friend});
    };
    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={this.onRowPressed.bind(this,item)}
                              style={styles.row}
            >
                <Image style={styles.avatar}  source={{uri: item.photoURL}}/>
                <Text style={styles.name} >{item.displayName}</Text>
            </TouchableOpacity>
        );
    };
    render() {
        if(this.props.loading) {
          return (<View style={styles.containerIndicator}>
                <ActivityIndicator size="large" color="purple" animating />

            </View>);
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.contacts}
                    extraData={this.state}
                    keyExtractor={(item, index) => index}
                    renderItem={this._renderItem.bind(this)}
                />
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1
    },
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    avatar: {
        width: 100,
        height: 100,
        borderWidth: 1
    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000'
    }
};

export default connect(state => ({
    contacts: state.contact.contacts,
    loading: state.contact.loading,
    me: state.authentication.user,
}), { fetchListContact })(ListContact);