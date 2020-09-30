import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isProjectsFetching: true,
    projects: [],
    tasks: [],
    error: null,
    successMessage: null
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PROJECTS:
            console.log('fetch projects')
            return {
                ...state,
                projects: action.payload.projects,
                isProjectsFetching: false
            };
        case actionTypes.INIT_TASKS:
            console.log('fetch tasks')
            return {
                ...state,
                tasks: action.payload.tasks
            };
        case actionTypes.ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case actionTypes.SUCCESS:
            return {
                ...state,
                successMessage: action.payload.message
            };
        case actionTypes.SUCCESS_DISAPPEAR:
            return {
                ...state,
                successMessage: null
            }
        case actionTypes.ERROR_DISMISS:

            return {
                ...state,
                error: null
            }
        case actionTypes.SUCCESS_DISMISS:

            return {
                ...state,
                successMessage: null
            }
        default:
            return state;
    }
}

export default firebaseReducer;
