import * as actionTypes from './../actions/actionTypes';
import * as authActions from "../../authActions";

export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {user}
    };
};

export const initUser = () => {
    return dispatch => {
        authActions.onAuthChange(data => dispatch(setUser(data)))
    };
};

export const authError = error => {
    return {
        type: actionTypes.AUTH_ERROR,
        payload: {error: error.message}
    };
};

export const errorDismiss = () => ({type: actionTypes.AUTH_ERROR_DISMISS})


export const login = (email, password) => {
    return dispatch => {
        authActions.login(email, password)
            .catch(errorData => dispatch(authError(errorData)))
    };
}

export const register = (email, password) => {
    return dispatch => {
        authActions.register(email, password)
            .catch(errorData => dispatch(authError(errorData)))
    };
}

export const logout = () => {
    return dispatch => {
        authActions.logout()
            .catch(errorData => dispatch(authError(errorData)))
    };
}
