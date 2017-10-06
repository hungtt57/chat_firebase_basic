import {LOGIN, LOGOUT} from './types';
import {NavigationActions} from 'react-navigation';
export const loginSuccess = (user) => {
  return (dispatch) => {
      dispatch({
         type: LOGIN,
         payload:user
      });
      //sau khi reset phai push action vo

      const resetNavigator = NavigationActions.reset({
          index : 0,
          actions : [
            NavigationActions.navigate({
                routeName :'Authorized',
                params :[
                    user
                ]
            })
          ],

      });
      dispatch(resetNavigator);
  };
};
export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT
        });
        const resetNavigator = NavigationActions.reset({
            index : 0,
            actions : [
                NavigationActions.navigate({
                    routeName :'Unauthorized',
                })
            ],

        });
        dispatch(resetNavigator);
    }
}