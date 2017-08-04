import {
    GET_SESSION,
    GET_COURSES,
    LOGGED_IN
} from '../actions/types';


const INIT = { 
    sessions : {},
    courses: {}
};

export default (state = INIT, action) => {  
    switch(action.type){
        case GET_SESSION:  
            return { ...state, sessions: action.payload };  
        case GET_COURSES:
            return { ...state, courses: action.payload };
        default:
            return state;             
    }
}