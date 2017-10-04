import React,{Component} from 'react';
import {View,Text} from 'react-native';
class Chat extends  Component {
    static navigationOptions = {
      title : 'Chat'
    };
    state = {
      friends : [
          {
              name : 'xinh 1',
              age : 24,
              avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
          },
          {
              name : 'xinh 2',
              age : 24,
              avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
          }, {
              name : 'Anh Tuan Nguyen 3',
              age : 24,
              avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
          }, {
              name : 'Anh Tuan Nguyen 4',
              age : 24,
              avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
          }, {
              name : 'Anh Tuan Nguyen 5',
              age : 24,
              avatar: 'https://ae01.alicdn.com/kf/HTB1a5YaJVXXXXaBXpXXq6xXFXXX4/2017-Push-Up-Sexy-Bra-Panties-Set-Women-Bra-Set-Female-Flower-Print-Lace-Set-Bra.jpg'
          }
      ]
    };
    componentWillMount() {

    }
    render() {
        return (

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'red'}}> Chat</Text>
            </View>
        );
    }
}
export default Chat;