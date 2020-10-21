import React, {useState} from "react";
import classes from './LoginForm.module.css';
import {Route} from "react-router";
import {URLS} from "../../constants/urls";
import {Button} from "../../components/Button/Button";
import {NavLink} from "react-router-dom";

export const AUTH_MODE = {
    LOGIN: 'Login',
    REGISTER: 'Register'
}

export const AuthModeSelector = ({to, text, onClick}) => {
    return (
        <NavLink className={text.toLowerCase()} activeClassName={classes.selected} to={to} onClick={onClick}>
            {text}
        </NavLink>
    );
};

export const Form = ({onSubmit, error, buttonText}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form
            className={classes.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(email, password);
            }}
        >
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
                {buttonText}
            </Button>
        </form>
    );
};

export const LoginForm = ({onLogin, onRegister, error, onErrorDismiss}) => {
    const dismissError = () => {
        if (error) {
            onErrorDismiss();
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.modeSelector}>
                <AuthModeSelector to={URLS.LOGIN} text={AUTH_MODE.LOGIN} onClick={dismissError}/>
                <AuthModeSelector to={URLS.REGISTER} text={AUTH_MODE.REGISTER} onClick={dismissError}/>
            </div>
            <Route path={URLS.LOGIN}>
                <Form
                    onSubmit={(email, password) => {
                        dismissError();
                        onLogin(email, password);
                    }}
                    error={error}
                    buttonText="Sign in"
                />
            </Route>
            <Route path={URLS.REGISTER}>
                <Form
                    onSubmit={(email, password) => {
                        dismissError();
                        onRegister(email, password);
                    }}
                    error={error}
                    buttonText="Register"
                />
            </Route>
        </div>
    );
};
