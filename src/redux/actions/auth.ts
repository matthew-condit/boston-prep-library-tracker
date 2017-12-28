import {LOGIN, LOGOUT} from './actionTypes';

const login = () => {
    return {
        type: LOGIN,
        authenticated: true
    }
}

const logout = () => {
    return {
        type: LOGOUT,
        authenticated: false
    }
}

export default {
    login, 
    logout
}