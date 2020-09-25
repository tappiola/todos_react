import {db, docToObject} from './firebase';

export const COLLECTION = {
    PROJECTS: db.collection("projects")
}

export const fetchProjects = async () => {
    const snapshot = await COLLECTION.PROJECTS.get();
    return snapshot.docs.map(doc => docToObject(doc));
}
