import React,{Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';
import RootNavigation from './navigations/RootNavigation';
import {connect} from 'react-redux';
class AppNavigator extends Component {
    render() {
        return (
            <RootNavigation
                navigation={addNavigationHelpers({
                    dispatch:this.props.dispatch,
                    state:this.props.nav
                })}
            >

            </RootNavigation>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav
    };
};
export  default connect(mapStateToProps)(AppNavigator);