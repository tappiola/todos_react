import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0rjpPM8iqavumUvmi-BRrmJodnL8-S90",
    authDomain: "todos-react-31981.firebaseapp.com",
    databaseURL: "https://todos-react-31981.firebaseio.com",
    projectId: "todos-react-31981",
    storageBucket: "todos-react-31981.appspot.com",
    messagingSenderId: "600954238001",
    appId: "1:600954238001:web:defbc5fc1f208f32f81110"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();

export function docToObject(doc) {
    return {
        id: doc.id,
        ...doc.data(),
    };
}
