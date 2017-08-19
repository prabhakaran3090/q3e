import {
    GET_SESSION,
    GET_COURSES,
    LOGGED_IN,
    COURSE_OUTLINE,
    BOOK_INDEX
} from '../actions/types';


const INIT = { 
    sessions : {},
    courses: {},
    outline: {},
    BookIndex: {}
};

export default (state = INIT, action) => {  
    switch(action.type){
        case GET_SESSION:  
            return { ...state, sessions: action.payload };  
        case GET_COURSES:
            return { ...state, courses: action.payload };
        case COURSE_OUTLINE: 
            return { ...state, outline: action.payload };  
        case BOOK_INDEX:
            return { ...state, BookIndex: action.payload };                        
        default:
            return state;             
    }
}