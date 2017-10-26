import {StackNavigator} from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import Chat from '../screens/Chat';
import Authorized from './Authorized';

const Root = StackNavigator({
   Unauthorized : {screen : Login},
   Authorized : {screen:Authorized}
},{
   headerMode:'screen',
    navigationOptions : {
        header: null,
    }
});
export  default Root;
// Login
// CHAT