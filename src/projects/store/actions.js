import * as actionTypes from './actionTypes';
import * as firebaseActions from "../../firebase/firestoreActions";

export const userIdSelector = (state) => state.auth.userId;

export const setProjects = projects => {
    return {
        type: actionTypes.INIT_PROJECTS,
        payload: {projects}
    };
};

export const initProjects = () => {
    return (dispatch, getState) => {
        firebaseActions.fetchProjects(data => dispatch(setProjects(data)), userIdSelector(getState()))
    };
};

export const clearProjectsAndTasks = () => {
    return {type: actionTypes.CLEAR_PROJECTS_AND_TASKS}
}

export const setTasks = tasks => {
    return {
        type: actionTypes.INIT_TASKS,
        payload: {tasks}
    };
};

export const initTasks = () => {
    return (dispatch, getState) => {
        firebaseActions.fetchTasks(data => dispatch(setTasks(data)), userIdSelector(getState()))
    };
};

export const firebaseSuccess = (message) => {
    return {
        type: actionTypes.SUCCESS,
        payload: {message}
    };
}

export const successDisappear = () => {
    return {
        type: actionTypes.SUCCESS_DISAPPEAR
    };
}

export const firebaseError = (error) => {
    return {
        type: actionTypes.FB_ERROR,
        payload: {error: {type: "Firebase error", message: error?.message || error}}
    };
}

export const errorDismiss = () => ({type: actionTypes.FB_ERROR_DISMISS});
export const successDismiss = () => ({type: actionTypes.SUCCESS_DISMISS});

const firebaseDispatch = (action, message) => {
    return (dispatch, getState) => {
        const userId = userIdSelector(getState());
        action(userId)
            .then(() => {
                dispatch(firebaseSuccess(message));
                setTimeout(() => {
                    dispatch(successDisappear())
                }, 1200)
            })
            .catch(errorData => dispatch(firebaseError(errorData)))
    };
}

export const addProjectFb = (projectData) => {
    return firebaseDispatch(
        userId => firebaseActions.createProject(projectData, userId),
        "Project has been created"
    )
};

export const editProjectFb = (id, projectData) => {
    return firebaseDispatch(
        userId => firebaseActions.editProject(id, projectData, userId),
        "Changes saved successfully"
    )
};

export const deleteProjectFb = id => {
    return firebaseDispatch(
        userId => Promise.all([
            firebaseActions.deleteProject(id, userId),
            firebaseActions.deleteTasksByProjectId(id, userId)
        ]), "Project has been deleted"
    )
}

export const addTaskFb = taskData => {
    return firebaseDispatch(
        userId => firebaseActions.createTask(taskData, userId),
        "Task has been added")
};

export const editTaskFb = (id, taskData) => {
    return firebaseDispatch(
        userId => firebaseActions.editTask(id, taskData, userId),
        "Changes saved successfully"
    )
};

export const deleteTaskFb = id => {
    return firebaseDispatch(
        userId => firebaseActions.deleteTask(id, userId),
        "Task has been deleted"
    )
};
