import {db, docToObject} from './firebase';

export const COLLECTION = {
    PROJECTS: db.collection("projects"),
    TASKS: db.collection("tasks")
}

const withUserCheck = (doc, action, userId) => {
    if (doc.data().userId === userId) {
        return action();
    } else {
        throw Error("You don't have permissions for this action");
    }
}

export const fetchProjects = (func, userId) => {
    const unsubscribe = COLLECTION.PROJECTS.where("userId", "==", userId).onSnapshot(
        querySnapshot => func(querySnapshot.docs.map(doc => docToObject(doc)))
    );

    return unsubscribe;
}

export const fetchTasks = (func, userId) => {

    const unsubscribe = COLLECTION.TASKS
        .where("userId", "==", userId)
        .where("isComplete", "==", false)
        .onSnapshot(querySnapshot => func(querySnapshot.docs.map(doc => docToObject(doc)))
        );

    return unsubscribe;
}

export const createProject = async ({name, description, color}, userId) => {
    return await COLLECTION.PROJECTS.add({name, description, color, userId});
}

export const editProject = async (id, {name, description, color}, userId) => {
    const docRef = COLLECTION.PROJECTS.doc(id);
    const doc = await docRef.get();
    withUserCheck(doc, async () => await docRef.set({name, description, color}, {merge: true}), userId);
}

export const createTask = async ({projectId, name}, userId) => {
    return await COLLECTION.TASKS.add({
        projectId,
        name,
        createdAt: +new Date(),
        isFocusedOn: false,
        isComplete: false,
        userId
    });
}

export const editTask = async (id, data, userId) => {
    const docRef = COLLECTION.TASKS.doc(id);
    const doc = await docRef.get();
    withUserCheck(doc, async () => await docRef.set({...data}, {merge: true}), userId);
}

export const deleteTask = async (id, userId) => {
    const docRef = COLLECTION.TASKS.doc(id);
    const doc = await docRef.get();
    withUserCheck(doc, async () => await doc.ref.delete(), userId);
}

export const deleteTasksByProjectId = async (id, userId) => {
    const docs = await COLLECTION.TASKS.where("projectId", "==", id).get();
    return docs.forEach(doc => {
        withUserCheck(doc, async () => await doc.ref.delete(), userId);
    });
}

export const deleteProject = async (id, userId) => {
    const docRef = COLLECTION.PROJECTS.doc(id);
    const doc = await docRef.get();
    withUserCheck(doc, async () => await docRef.delete(), userId);
}
