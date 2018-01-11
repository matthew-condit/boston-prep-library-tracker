import {LOGIN, LOGOUT} from './actionTypes';

const login = (user) => {
    return {
        type: LOGIN,
        authenticated: true,
        user
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