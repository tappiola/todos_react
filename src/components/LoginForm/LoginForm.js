import React, {useState} from "react";
import classes from './LoginForm.module.css';
import {useHistory} from "react-router";
import {URLS} from "../../constants/urls";
import {Button} from "../../containers/Button/Button";

const AUTH_MODE = {
    LOGIN: 'Login',
    REGISTER: 'Register'
}

const URL_TO_MODE = {
    [URLS.LOGIN]: AUTH_MODE.LOGIN,
    [URLS.REGISTER]: AUTH_MODE.REGISTER
}

export const LoginForm = ({onLogin, onRegister, error, onErrorDismiss}) => {
    const history = useHistory();

    const [authMode, setAuthMode] = useState(URL_TO_MODE[history.location.pathname] || AUTH_MODE.LOGIN);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AuthModeSelector = ({mode}) => {
        return <div
            className={authMode === mode ? classes.selected : ''}
            onClick={() => {
                setAuthMode(mode);
                setEmail('');
                setPassword('');
                if (error) {
                    onErrorDismiss();
                }
                history.push(mode === AUTH_MODE.LOGIN ? URLS.LOGIN : URLS.REGISTER);
            }}
        >{mode}</div>
    }

    return <div className={classes.container}>
        <form className={classes.form} onSubmit={e => {
            e.preventDefault();
            if (error) {
                onErrorDismiss();
            }
            authMode === AUTH_MODE.LOGIN ? onLogin(email, password) : onRegister(email, password);
        }}>
            <div className={classes.modeSelector}>
                <AuthModeSelector mode={AUTH_MODE.LOGIN}/>
                <AuthModeSelector mode={AUTH_MODE.REGISTER}/>
            </div>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                autoComplete="on"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className={classes.errorMessage}>{error}</div>
            <Button type="submit" disabled={!email || !password}>
                {authMode === AUTH_MODE.LOGIN ? "Sign in" : "Register"}
            </Button>
        </form>
    </div>
}
