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
    COLLECTION.TASKS.where("isComplete", "!=", true).onSnapshot(
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
    return await COLLECTION.TASKS.add({
        projectId,
        name,
        createdAt: +new Date(),
        isFocusedOn: false,
        isComplete: false
    });
}

export const editTask = async (id, data) => {
    return await COLLECTION.TASKS.doc(id).set({...data}, {merge: true});
}
