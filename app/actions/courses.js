import { AsyncStorage } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';

import { reqHeader } from '../config/Config'
import {
    GET_SESSION,
    GET_COURSES
} from './types';
import { URI } from '../config/Config';

export const getCourses = (phase='') => {

    return async (dispatch) => {

        const username = await AsyncStorage.getItem('username'); 
        axios.get(`http://${URI.phpServer}/q3api/v1/index.php/Getcourse/enrol_course_id/${username}/${phase}`,reqHeader)
        .then(response => response.data) 
        .then(courses => {
            dispatch({
                type: GET_COURSES,
                payload: courses
            })
        })
        .catch(function (error) { 
        });
    }
}

export const getSessions = () => { 

    return async (dispatch) => {
        const username = await AsyncStorage.getItem('username');

        axios.get(`http://${URI.nodeServer}:${URI.port}/sessions/?username=${username}`)
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