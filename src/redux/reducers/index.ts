import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import userReducer from './user';

export default combineReducers({
    routing: routerReducer,
    auth: authReducer,
    user: userReducer
});