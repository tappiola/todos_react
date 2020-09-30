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

const App = ({userId, userLoadComplete}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(userLoadComplete, userId)

    const ProtectedContent = () => {
        return <div id="main">
            <LeftMenu menuOpen={menuOpen} onMenuClose={() => setMenuOpen(false)}/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/inbox"/>
                </Route>
                <Route exact path="/inbox">
                    <TasksList projectId="inbox"/>
                </Route>
                <Route exact path="/focus">
                    <TasksList projectId="focus"/>
                </Route>
                <Route exact path="/projects/:id">
                    {({match}) => <TasksList projectId={match.params.id}/>}
                </Route>
                <Route>
                    <div className="message">Project not found</div>
                </Route>
            </Switch>
        </div>
    }

    return <div id="container">
        <SuccessPopup/>
        <ErrorPopup/>
        <div id="top-panel">
            {userId && <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>}
            <div>Some option</div>
            <div>Tappiola</div>
        </div>
        <Switch>
            <Route exact path="/login">
                {userLoadComplete && !userId && <LoginForm/>}
            </Route>
            {userId && <Route>
                <ProtectedContent/>
            </Route>}
        </Switch>
        {userLoadComplete && !userId ? <Redirect to="/login"/> :
            <Route exact path="/login">
            <Redirect to='/inbox'/>
            </Route>}
    </div>
}

const mapStateToProps = ({auth: {userId, userLoadComplete}}) => ({userId, userLoadComplete});

export default connect(mapStateToProps)(App);
