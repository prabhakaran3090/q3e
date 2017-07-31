import { combineReducers } from 'redux';
import Auth from './auth';
import Nav from './nav';
import courses from './courses';

export default combineReducers({
    Auth, 
    Nav,
    courses
});
