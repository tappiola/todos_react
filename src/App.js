import React, {useState} from 'react';
import './App.css';
import {HamburgerButton} from "./containers/HamburgerButton/HamburgerButton";
import LeftMenu from "./components/LeftMenu";
import TasksList from "./components/TasksList";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div id="container">
        <div id="top-panel">
            <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>
            <div>Some option</div>
            <div>Tappiola</div>
        </div>
        <div id="main">
            <LeftMenu menuOpen={menuOpen}/>
            <TasksList/>
        </div>
    </div>
}

export default App;
