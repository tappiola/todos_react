import {auth} from "./firebase";

export const onAuthChange = (setFunc) => {
    return auth.onAuthStateChanged(user => {
        setFunc(user)
    });
}

export const login = (login, password) => auth.signInWithEmailAndPassword(login, password);

export const logout = () => auth.signOut();

export const register = (login, password) => {
    return auth.createUserWithEmailAndPassword(login, password)
}
