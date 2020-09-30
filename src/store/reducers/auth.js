import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    userId: null,
    displayName: null,
    error: null,
    userLoadComplete: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_USER:
            console.log('init user');
            return {
                ...state,
                userId: action.payload.user?.uid || null,
                email: action.payload.user?.email || null,
                displayName: action.payload.user?.displayName || null,
                userLoadComplete: true
            };
        default:
            return state;
    }
}

export default authReducer;
