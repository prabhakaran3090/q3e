import {
    GET_SESSION,
    GET_COURSES,
    LOGGED_IN,
    COURSE_OUTLINE
} from '../actions/types';


const INIT = { 
    sessions : {},
    courses: {},
    outline: {}
};

export default (state = INIT, action) => {  
    switch(action.type){
        case GET_SESSION:  
            return { ...state, sessions: action.payload };  
        case GET_COURSES:
            return { ...state, courses: action.payload };
        case COURSE_OUTLINE:
            return { ...state, outline: action.payload };            
        default:
            return state;             
    }
}