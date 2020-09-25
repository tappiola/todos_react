import * as actionTypes from './actionTypes';
import {fetchProjects, fetchTasks} from "../../firebaseActions";

export const setProjects = projects => {
    return {
        type: actionTypes.INIT_PROJECTS,
        payload: {projects}
    };
};

export const initProjects = () => {
    return dispatch => {
        fetchProjects(data => dispatch(setProjects(data)))
    };
};

export const setTasks = tasks => {
    return {
        type: actionTypes.INIT_TASKS,
        payload: {tasks}
    };
};

export const initTasks = () => {
    return dispatch => {
        fetchTasks(data => dispatch(setTasks(data)))
    };
};
