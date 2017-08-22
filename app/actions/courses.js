import { AsyncStorage } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';

import { reqHeader } from '../config/Config'
import {
    GET_SESSION,
    GET_COURSES,
    SEE_MORE,
    VIEW_BOOK,
    SELECT_BOOK,
    COURSE_OUTLINE,
    BOOK_INDEX
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


export const getCourseOutline = (id) => { 
    return async (dispatch) => { 
        await axios.get(`http://${URI.phpServer}/q3api/v1/index.php/cs/course_by_id?data=${id}&_=${Date.now()}`, reqHeader)
        .then(response => response.data) 
        .then(outline => { 
            dispatch({
                type: COURSE_OUTLINE,
                payload: outline[id]
            });
        })
        .catch(() => {
         
        })
    }
}

export const getBookIndex = (id) => {
    return (dispatch) => {
             axios.get(`http://${URI.phpServer}/coursepack/generate_books/gen_book_html.php?course=${id}`)
            .then(response => response.data)
            .then(index => {   
                dispatch({
                    type: BOOK_INDEX,
                    payload: index
                });
            })
            .catch(() => {

            })
    }
}

export const seeMore = (desc) => { 
    return {
        type: SEE_MORE,
        payload: desc
    };
};


export const selectBook = (data) => { 
    return {
        type: SELECT_BOOK,
        payload: data
    };
};
 
export const viewBook = () => { 
    return {
        type: VIEW_BOOK,
        payload: ''
    };
};
