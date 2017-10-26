import {DrawerNavigator} from 'react-navigation';
import Home from './Home';
import Setting from './Setting';
import Profile from './Profile';
import DrawerContent  from '../components/DrawerContent';
import React from 'react';
const Authorized = DrawerNavigator({
    Home : {screen : Home
    },
    Profile : {screen : Profile},
    Setting : {screen : Setting},
    // Logout : {screen : ''},
} ,
    {
        contentComponent: props => <DrawerContent {...props} />,
    }
    )
;
export default Authorized;
