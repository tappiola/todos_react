import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {HamburgerButton} from "../components/HamburgerButton/HamburgerButton";
import {Redirect, Route, Switch} from "react-router";
import ErrorPopup from "../components/ErrorPopup";
import SuccessPopup from "../components/SuccessPopup";
import LoginForm from "../user/LoginForm";
import {connect} from "react-redux";
import * as actionCreators from "../user/store/actions";
import {URLS} from "../constants/urls";
import {AppProtected} from "./AppProtected";

const App = ({userId, email, userLoadComplete, loadProjectsAndTasks, clearProjectsAndTasks, isDataLoading, onLogout}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        userId ? loadProjectsAndTasks() : clearProjectsAndTasks();
    }, [clearProjectsAndTasks, loadProjectsAndTasks, userId]);

    if (!userLoadComplete) {
        return null
    }

    return <div className={classes.container}>
        <SuccessPopup/>
        <ErrorPopup/>
        <div className={classes.topPanel}>
            {userId && <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>}
            {userId &&
            <div className={classes.userMessage}>
                <span>Logged in as {email}</span>
                <span className={classes.authLink} onClick={onLogout}>Logout</span>
            </div>}
        </div>
        <Switch>
            <Route exact path={URLS.LOGIN}>
                {userId ? <Redirect to={URLS.INBOX}/> : <LoginForm/>}
            </Route>
            <Route exact path={URLS.REGISTER}>
                {userId ? <Redirect to={URLS.INBOX}/> : <LoginForm/>}
            </Route>
            {userId && !isDataLoading && <Route>
                <AppProtected menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </Route>}
            {!userId && <Redirect to={URLS.LOGIN}/>}
        </Switch>
    </div>
}

const mapStateToProps = ({auth: {userId, email, userLoadComplete}}) => ({userId, email, userLoadComplete});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actionCreators.logout()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
