import * as actionTypes from './../actions/actionTypes';
import * as authActions from "../../authActions";

export const setUser = user => {
    return {
        type: actionTypes.INIT_USER,
        payload: {user}
    };
};

export const initUser = () => {
    return dispatch => {
        authActions.onAuthChange(data => dispatch(setUser(data)))
    };
};

export const authError = error => {
    console.log('ERROR', error.message);
    return {
        type: actionTypes.AUTH_ERROR,
        payload: {error: error.message}
    };
};


export const login = (email, password) => {
    return dispatch => {
        authActions.login(email, password)
            .catch(errorData => dispatch(authError(errorData)))
    };
}
