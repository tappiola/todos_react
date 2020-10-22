import React from 'react';
import classes from './App.module.css';
import LeftMenu from "../projects/LeftMenu";
import TasksList from "../projects/TasksList";
import {Redirect, Route, Switch} from "react-router";
import {URLS} from "../constants/urls";
import {Message} from "../components/Message/Message";
import PropTypes from "prop-types";

export const AppProtected = ({menuOpen, setMenuOpen}) => {

    return <div className={classes.main}>
        <LeftMenu menuOpen={menuOpen} onMenuClose={() => setMenuOpen(false)}/>
        <Switch>
            <Route exact path="/">
                <Redirect to={URLS.INBOX}/>
            </Route>
            <Route exact path={URLS.INBOX}>
                <TasksList projectId="inbox"/>
            </Route>
            <Route exact path={URLS.FOCUS}>
                <TasksList projectId="focus"/>
            </Route>
            <Route exact path={`${URLS.PROJECTS}/:id`}>
                {({match}) => <TasksList projectId={match.params.id}/>}
            </Route>
            <Route>
                <Message>Project not found</Message>
            </Route>
        </Switch>
    </div>
}

AppProtected.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func
}
