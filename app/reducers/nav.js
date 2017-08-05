import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../config/Router';
import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    SERVERIP_CHANGED,
    SERVERIP_FAILED,
    LOGIN_SUCCESS,
    LOGIN_INIT,
    SERVER_NOT_REACHABLE,
    LOGGED_IN,
    ON_LOGOUT,
    SEE_MORE,
    VIEW_BOOK
} from '../actions/types';

 
const LoginAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(LoginAction); 

export default (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case LOGGED_IN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
            break;
        case ON_LOGOUT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        case SEE_MORE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Description' }),
                state
            );
            break;
        case VIEW_BOOK:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'BookIndex' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

