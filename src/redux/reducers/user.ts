import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case:
        case LOGIN:
            return {
                ...state,
                user: action.payload
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