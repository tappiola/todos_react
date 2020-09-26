import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isProjectsFetching: true,
    projects: [],
    tasks: []
};

const reducer = (state = initialState, action) => {
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

        default:
            return state;
    }
}

export default reducer;
