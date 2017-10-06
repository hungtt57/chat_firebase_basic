import React, {Component} from 'react';
import {
    View, Text, FlatList, Image,
    TouchableWithoutFeedback, Button
} from 'react-native';
import {logout} from "../actions/Authenticate";
import {connect} from 'react-redux';
class Chat extends Component {

    static navigationOptions = ({ navigation }) => {

        const {state, setParams} = navigation;
        return {
            title: 'Chat',
            headerLeft: (
                <TouchableWithoutFeedback
                    onPress={() => state.params.onLogoutPressed()}
                >
                    <View  style={{
                        padding : 10,
                    }}>
                        <Text>LogOut</Text>
                    </View>
                </TouchableWithoutFeedback>
            ),
        };
    };
    constructor(props) {
        super(props);
        this.onLogoutPressed = this.onLogoutPressed.bind(this);
    }
    state = {
        friends: [
            {
                name: 'xinh 1',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 2',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 3',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 4',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 5',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 1',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 2',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 3',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 4',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 5',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 1',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 2',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 3',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 4',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 5',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 1',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },
            {
                name: 'xinh 2',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 3',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 4',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            }, {
                name: 'Anh Tuan Nguyen 5',
                age: 24,
                avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
            },

        ]
    };
    componentDidMount() {
        this.props.navigation.setParams({
           onLogoutPressed : this.onLogoutPressed
        });
    }
    componentWillMount() {

    }
    onLogoutPressed = () => {
        this.props.logout();
    }
    _renderItem = ({item}) => {
        return (
            <View style={[styles.itemContainer, styles.separator]}>
                <Image style={styles.itemAvatar} source={{uri: item.avatar}}/>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        );
    };

    render() {
        return (

            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.friends}
                    extraData={this.state}
                    keyExtractor={(item, index) => index}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 61,
    },
    itemAvatar: {
        width: 60,
        height: 60
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    },
    itemName: {
        paddingLeft: 15,
        fontSize: 16,
        color: '#333'
    }
}
const mapStateToProps = (state) => {
    return {
        logged: state.authentication.loggedIn,
        user: state.authentication.user
    };
};
export default connect(mapStateToProps,{logout})(Chat);
