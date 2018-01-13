import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    authenticated: false // temp
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case:
        case LOGIN: 
            return {
                ...state,
                authenticated: action.authenticated
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: action.authenticated
            };
        default:
            return state;
    }
};

export default authReducer;