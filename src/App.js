import React, {useState} from 'react';
import './App.css';
import {HamburgerButton} from "./containers/HamburgerButton/HamburgerButton";
import LeftMenu from "./components/LeftMenu";
import TasksList from "./components/TasksList";
import {Redirect, Route, Switch} from "react-router";
import ErrorPopup from "./components/ErrorPopup";
import SuccessPopup from "./components/SuccessPopup";
import LoginForm from "./components/LoginForm";
import {connect} from "react-redux";
import * as actionCreators from "./store/actions/auth";
import {URLS} from "./constants/urls";

const App = ({userId, email, userLoadComplete, onLogout}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const ProtectedContent = () => {
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

    if (!userLoadComplete) {
        return null
    }

    return <div id="container">
        <SuccessPopup/>
        <ErrorPopup/>
        <div id="top-panel">
            {userId && <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>}
            <div></div>
            {userId && <div className="user-message"><span>Logged in as {email}</span><span className="auth-link" onClick={onLogout}>Logout</span></div>}
        </div>
        <Switch>
            <Route exact path={URLS.LOGIN}>
                {!userId && <LoginForm/>}
            </Route>
            <Route exact path={URLS.REGISTER}>
                {!userId && <LoginForm/>}
            </Route>
            {userId && <Route>
                <ProtectedContent/>
            </Route>}
        </Switch>
        {!userId ? <Redirect to={URLS.LOGIN}/> :
            <>
                <Route exact path={URLS.LOGIN}><Redirect to={URLS.INBOX}/></Route>
                <Route exact path={URLS.REGISTER}><Redirect to={URLS.INBOX}/></Route>
            </>
        }
    </div>
}

const mapStateToProps = ({auth: {userId, email, userLoadComplete}}) => ({userId, email, userLoadComplete});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actionCreators.logout()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
