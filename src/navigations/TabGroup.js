import {StackNavigator} from 'react-navigation';
import ListGroup from '../screens/authorized/home/group/ListGroup';
import AddGroup from '../screens/authorized/home/group/AddGroup';
import EditGroup from '../screens/authorized/home/group/EditGroup';
import ViewGroup from '../screens/authorized/home/group/ViewGroup';

const TabGroup = StackNavigator({
    List : {screen:ListGroup},
    Add : {screen:AddGroup},
    Edit : {screen:EditGroup},
    View : {screen:ViewGroup},
},{
    headerMode:'screen',
    navigationOptions : {
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    }
});
export default TabGroup;