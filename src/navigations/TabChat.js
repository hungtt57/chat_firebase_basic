import {StackNavigator} from 'react-navigation';
import ListChat from '../screens/authorized/home/chat/ListChat';
import AddChat from '../screens/authorized/home/chat/AddChat';
import EditChat from '../screens/authorized/home/chat/EditChat';
import ViewChat from '../screens/authorized/home/chat/ViewChat';

const TabChat = StackNavigator({
    List : {screen:ListChat},
    Add : {screen:AddChat},
    Edit : {screen:EditChat},
    View : {screen:ViewChat},
},{
    headerMode:'screen',
    navigationOptions : {
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    }
});
export default TabChat;