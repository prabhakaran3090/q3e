import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator, BookTabStack } from '../config/Router';
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
    VIEW_BOOK,
    SELECT_BOOK,
    BOOK_INDEX,
    FORUM_COURSE_ID,
    FORUM_LIST,
    FORUM_LIST_ID,
    PROFILE_EDIT,
    PROFILE_EDIT_SCREEN,
    BACK,
    VIEW_CHAPTER,
    PLAY_VIDEO
} from '../actions/types';

 
const LoginAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(LoginAction); 

export const AppRoot = (state = initialNavState, action) => {
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
                NavigationActions.navigate({ 
                    routeName: 'Description',
                    params: { outline : action.payload },
                }),
                state
            );
            break;
        case SELECT_BOOK:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ 
                    routeName: 'CourseMain',
                     params: {id: action.payload}, 
                }),
                state
            );
            break; 
        case FORUM_COURSE_ID: 
           nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                     routeName: 'ForumList',
                     params: {id: action.payload}
             }),
                state
            );   
            break;  
         case FORUM_LIST_ID: 
           nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                     routeName: 'ForumDiscussion',
                     params: {id: action.payload}
             }),
                state
            );   
            break;   
        case PROFILE_EDIT_SCREEN: 
        nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'Edit',
                    params: {uname: action.payload}
            }),
                state
            );   
            break;         
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
 
    return nextState || state;
}
const BookAction = BookTabStack.router.getActionForPathAndParams('Loading');
const initialBookNavState = BookTabStack.router.getStateForAction(BookAction); 

export const BookNav = (state = initialBookNavState, action) => {
    let nextState; 
    switch (action.type) {
        case BOOK_INDEX:    
            nextState = BookTabStack.router.getStateForAction( 
                    NavigationActions.navigate({
                        routeName: 'BookHome',
                        params: { BookIndex: action.payload },
                    })
                ,
                state
            ); 
            break;
        case BACK:
            nextState = BookTabStack.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case VIEW_CHAPTER:
            nextState = BookTabStack.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'ViewBook',
                    params: { data: action.payload }
                }),
                state
            );
            break;  
        case PLAY_VIDEO:
            nextState = BookTabStack.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'VP',
                    params: { data: action.payload }
                }),
                state
            );
            break;  
        default:
            nextState = BookTabStack.router.getStateForAction(action, state);
            break;
    }
    return nextState || state; 
}   

