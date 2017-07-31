import { AsyncStorage } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';

import {
    GET_SESSION
} from './types';
import { URI } from '../config/Config';

export const getSessions = () => { 

    return async (dispatch) => {
        const username = await AsyncStorage.getItem('username');

        axios.get(`http://${URI.ip}/sessions/?username=${username}`)
            .then(response => response.data)
            .then(sessions => { 
                dispatch ({
                    type: GET_SESSION,
                    payload: sessions
                });
            })
            .catch(function (error) {

            });
    }
 
}