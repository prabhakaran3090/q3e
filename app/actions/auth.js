import { AsyncStorage } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';

import { 
    USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    SERVERIP_CHANGED, 
    SERVERIP_FAILED, 
    LOGIN_SUCCESS,
    LOGIN_INIT,
    SERVER_NOT_REACHABLE,
    LOGGED_IN,
    ON_LOGOUT
 } from './types';
import { URI } from '../config/Config';

 export const onSubmit = (username, password) => {  
    return (dispatch) => {
        dispatch({ type: LOGIN_INIT });
        axios.defaults.timeout = 1000;   
        axios.post(`http://${URI.nodeServer}:${URI.port}/login`, querystring.stringify({ username: username, pass: password }))
        .then((response) => {     
            return response.data;
            }).then(async (res) => {   
            if (res.success === true) { 
                const userInfo = {
                    id: res.data.userid,
                    username,
                    password 
                };  
 
                await AsyncStorage.multiSet([
                    ['username', userInfo.username.toString()],
                    ['password', userInfo.password.toString()],
                    ['userId', userInfo.id.toString()]
                ])
                .then(dispatch({
                    type: LOGGED_IN,
                    payload: userInfo
                }))
                    .catch((err) => {
                        console.log(err)
                        dispatch({
                            type: SERVER_NOT_REACHABLE,
                            payload: 'Something went wrong please try again.'
                        });
                    });   

                 

                
            } else if (res.success === false) {  
                dispatch({
                    type: SERVERIP_FAILED,
                    payload: res.message
                });
            } else {
                dispatch({ 
                    type: SERVER_NOT_REACHABLE,
                    payload: 'Something went wrong please try again.'
                });                
            }
        }).catch((res) => {  
            dispatch({ 
                type: SERVER_NOT_REACHABLE,
                payload: 'Server not reachable'
             });
        });  
    };
};
 

 export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const LoggedIn = () => { 
    return {
        type: LOGGED_IN,
        payload: ''
    }
}
export const onLogout = ()  => {
    AsyncStorage.clear();
    return{
        type: ON_LOGOUT,
        payload: ''
    }
}