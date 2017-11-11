import {StackNavigator} from 'react-navigation';
import ListContact from '../screens/authorized/home/contact/ListContact';
import AddContact from '../screens/authorized/home/contact/AddContact';
import Conversation from '../screens/authorized/home/contact/Conversation';
import ViewContact from '../screens/authorized/home/contact/ViewContact';

const TabContact = StackNavigator({
    List : {screen:ListContact},
    // Add : {screen:AddContact},
    Conversation : {screen:Conversation},
    // View : {screen:ViewContact},
},{
    // headerMode:'s',
    navigationOptions : {
        titleStyle : {
            textAlign:'center',
            justifyContent:'center',
            alignSelf:'center'
        },
        // headerTitleStyle :{textAlign: 'center',alignSelf:'center',},
        // headerStyle : {
        //     justifyContent:'center'
        // }
    }
});
export default TabContact;