import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: {},
    isAdmin: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case:
        case LOGIN:
            return {
                ...state,
                user: action.user,
                isAdmin: action.user.role === 'admin'
            };
        case LOGOUT:
            return {
                ...state,
                user: {}
            };
        default:
            return state;
    }
}

export default userReducer;