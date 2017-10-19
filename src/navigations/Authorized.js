import {DrawerNavigator} from 'react-navigation';
import Profile from '../screens/authorized/Profile';
import Setting from '../screens/authorized/Setting';
import Home from './Home';
const Authorized = DrawerNavigator({
    Home : {screen : Home},
    Profile : {screen : Profile},
    Setting : {screen : Setting},
    // Logout : {screen : ''},
});
export default Authorized;