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
        type: actionTypes.ERROR,
        payload: {error: {type: "Firebase error", message: error.message}}
    };
}

export const errorDismiss = () => ({type: actionTypes.ERROR_DISMISS})
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

export const addProjectFb = (projectData) => {
    return firebaseDispatch(
        () => firebaseActions.createProject(projectData),
        "Project has been created"
    )
};

export const editProjectFb = (id, projectData) => {
    return firebaseDispatch(
        () => firebaseActions.editProject(id, projectData),
        "Changes saved successfully"
    )
};

export const deleteProjectFb = id => {
    return firebaseDispatch(
        () => Promise.all([
            firebaseActions.deleteProject(id),
            firebaseActions.deleteTasksByProjectId(id)
        ]), "Project has been deleted"
    )
}

export const addTaskFb = (taskData) => {
    return firebaseDispatch(
        () => firebaseActions.createTask(taskData),
        "Task has been added")
};

export const editTaskFb = (id, taskData) => {
    return firebaseDispatch(
        () => firebaseActions.editTask(id, taskData),
        "Changes saved successfully"
    )
};

export const deleteTaskFb = id => {
    return firebaseDispatch(
        () => firebaseActions.deleteTask(id),
        "Task has been deleted"
    )
};
