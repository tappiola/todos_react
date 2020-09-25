import * as actionTypes from './actionTypes';
import {fetchProjects} from "../../firebaseActions";

export const setProjects = projects => {
    return {
        type: actionTypes.SET_PROJECTS,
        payload: {projects}
    };
};

export const initProjects = () => {
    return dispatch => {
        fetchProjects().then(data => dispatch(setProjects(data)))
    };
};
