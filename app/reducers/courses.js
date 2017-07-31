import {
    GET_SESSION
} from '../actions/types';


const INIT = { sessions : {} };

export default (state = INIT, action) => {  
    switch(action.type){
        case GET_SESSION:  
            return { ...state, sessions: action.payload };
        default :
            return state; 
    }
}