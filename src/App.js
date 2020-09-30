import React, {useState} from 'react';
import './App.css';
import {HamburgerButton} from "./containers/HamburgerButton/HamburgerButton";
import LeftMenu from "./components/LeftMenu";
import TasksList from "./components/TasksList";
import {Redirect, Route, Switch} from "react-router";
import ErrorPopup from "./components/ErrorPopup";
import SuccessPopup from "./components/ErrorPopup";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div id="container">
        <SuccessPopup/>
        <ErrorPopup/>
        <div id="top-panel">
            <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>
            <div>Some option</div>
            <div>Tappiola</div>
        </div>
        <div id="main">
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
                    <div className="message">Page not found</div>
                </Route>
            </Switch>
        </div>
    </div>
}

export default App;
