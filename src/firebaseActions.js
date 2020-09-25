import {db, docToObject} from './firebase';

export const COLLECTION = {
    PROJECTS: db.collection("projects")
}

export const fetchProjects = func => {
    COLLECTION.PROJECTS.onSnapshot(
        querySnapshot => func(querySnapshot.docs.map(doc => docToObject(doc)))
    );
}
