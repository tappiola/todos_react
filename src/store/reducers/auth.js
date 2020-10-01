import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    userId: null,
    error: null,
    userLoadComplete: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            console.log('init user');
            return {
                ...state,
                userId: action.payload.user?.uid || null,
                email: action.payload.user?.email || null,
                userLoadComplete: true
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                userId: null,
                email: null,
            };
        case actionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case actionTypes.AUTH_ERROR_DISMISS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export default authReducer;
