import * as actionTypes from '../actions/actionTypes';

const initialState = {
    projects: [],
    tasks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROJECTS:
            console.log('fetch projects')
            console.log(action.payload)
            return {
                ...state,
                projects: action.payload.projects
            };
        default:
            return state;
    }
}

export default reducer;
