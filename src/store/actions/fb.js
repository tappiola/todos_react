import * as actionTypes from './actionTypes';
import * as firebaseActions from "../../firebaseActions";

export const setProjects = projects => {
    return {
        type: actionTypes.INIT_PROJECTS,
        payload: {projects}
    };
};

export const initProjects = userId => {
    return dispatch => {
        firebaseActions.fetchProjects(data => dispatch(setProjects(data)), userId)
    };
};

export const setTasks = tasks => {
    return {
        type: actionTypes.INIT_TASKS,
        payload: {tasks}
    };
};

export const initTasks = userId => {
    return dispatch => {
        firebaseActions.fetchTasks(data => dispatch(setTasks(data)), userId)
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

export const errorDismiss = () => ({type: actionTypes.FB_ERROR_DISMISS})
export const successDismiss = () => ({type: actionTypes.SUCCESS_DISMISS})

const firebaseDispatch = (action, message) => {
    return dispatch => {
        action()
            .then(() => {
                dispatch(firebaseSuccess(message));
                setTimeout(() => {
                    dispatch(successDisappear())
                }, 1200)
            })
            .catch(errorData => dispatch(firebaseError(errorData)))
    };
}

export const addProjectFb = (projectData, userId) => {
    return firebaseDispatch(
        () => firebaseActions.createProject(projectData, userId),
        "Project has been created"
    )
};

export const editProjectFb = (id, projectData, userId) => {
    return firebaseDispatch(
        () => firebaseActions.editProject(id, projectData, userId),
        "Changes saved successfully"
    )
};

export const deleteProjectFb = (id, userId) => {
    return firebaseDispatch(
        () => Promise.all([
            firebaseActions.deleteProject(id, userId),
            firebaseActions.deleteTasksByProjectId(id, userId)
        ]), "Project has been deleted"
    )
}

export const addTaskFb = (taskData, userId) => {
    return firebaseDispatch(
        () => firebaseActions.createTask(taskData, userId),
        "Task has been added")
};

export const editTaskFb = (id, taskData, userId) => {
    return firebaseDispatch(
        () => firebaseActions.editTask(id, taskData, userId),
        "Changes saved successfully"
    )
};

export const deleteTaskFb = (id, userId) => {
    return firebaseDispatch(
        () => firebaseActions.deleteTask(id, userId),
        "Task has been deleted"
    )
};
