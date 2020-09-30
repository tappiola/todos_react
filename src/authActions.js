import {auth} from "./firebase";

export const onAuthChange = (setFunc) => {
    const func = auth.onAuthStateChanged(user => {
        setFunc(user);
    });

    return func;
}

export const login = (login, password) => auth.signInWithEmailAndPassword(login, password);

export const logout = () => auth.signOut();

export const register = (login, password) => {
    return auth.createUserWithEmailAndPassword(login, password)
}
