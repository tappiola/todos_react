import React, {useState} from 'react';
import classes from './App.module.css';
import {HamburgerButton} from "./containers/HamburgerButton/HamburgerButton";
import {Redirect, Route, Switch} from "react-router";
import ErrorPopup from "./components/ErrorPopup";
import SuccessPopup from "./components/SuccessPopup";
import LoginForm from "./components/LoginForm";
import {connect} from "react-redux";
import * as actionCreators from "./store/actions/auth";
import {URLS} from "./constants/urls";
import {AppProtected} from "./AppProtected";

const App = ({userId, email, userLoadComplete, onLogout}) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                {!userId && <LoginForm/>}
            </Route>
            <Route exact path={URLS.REGISTER}>
                {!userId && <LoginForm/>}
            </Route>
            {userId && <Route>
                <AppProtected menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
