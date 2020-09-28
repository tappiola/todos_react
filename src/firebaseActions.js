import {db, docToObject} from './firebase';

export const COLLECTION = {
    PROJECTS: db.collection("projects"),
    TASKS: db.collection("tasks")
}

export const fetchProjects = func => {
    COLLECTION.PROJECTS.onSnapshot(
        querySnapshot => func(querySnapshot.docs.map(doc => docToObject(doc)))
    );
}

export const fetchTasks = func => {
    COLLECTION.TASKS.onSnapshot(
        querySnapshot => func(querySnapshot.docs.map(doc => docToObject(doc)))
    );
}

export const createProject = async ({name, description, color}) => {
    return await COLLECTION.PROJECTS.add({name, description, color});
}

export const editProject = async (id, {name, description, color}) => {
    return await COLLECTION.PROJECTS.doc(id).set({name, description, color}, {merge: true});
}

export const createTask = async ({projectId, name}) => {
    debugger
    return await COLLECTION.TASKS.add({projectId, name});
}
