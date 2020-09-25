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
