import * as actionTypes from './actionTypes';
import * as firebaseActions from "../../firebaseActions";

export const setProjects = projects => {
    return {
        type: actionTypes.INIT_PROJECTS,
        payload: {projects}
    };
};

export const initProjects = () => {
    return dispatch => {
        firebaseActions.fetchProjects(data => dispatch(setProjects(data)))
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
        firebaseActions.fetchTasks(data => dispatch(setTasks(data)))
    };
};

export const firebaseError = (error) => {
    return {
        type: actionTypes.FIREBASE_ERROR,
        payload: {error}
    };
}

export const addProjectFb = (projectData) => {
    return dispatch => {
        firebaseActions.createProject(projectData)
            .then(() => alert('success'))
            .catch(errorData => dispatch(firebaseError(errorData)))
    };
};
