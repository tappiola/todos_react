import React from 'react';
import './App.css';
import LeftMenu from "./components/LeftMenu";
import TasksList from "./components/TasksList";
import {Redirect, Route, Switch} from "react-router";
import {URLS} from "./constants/urls";

export const AppProtected = ({menuOpen, setMenuOpen}) => {

        return <div id="main">
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
                    <div className="message">Project not found</div>
                </Route>
            </Switch>
        </div>
    }
