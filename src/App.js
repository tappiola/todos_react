import React, {useState} from 'react';
import './App.css';
import {Task} from "./components/Task/Task";
import {HamburgerButton} from "./components/HamburgerButton/HamburgerButton";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div id="container">
        <div id="top-panel">
            <HamburgerButton menuOpen={menuOpen} onButtonClick={() => setMenuOpen(!menuOpen)}/>
            <div>Some option</div>
            <div>Tappiola</div>
        </div>
        <div id="main">
            <div id="left-menu" className={menuOpen ? '' : 'hidden'}>
                <div className="item">Inbox</div>
                <div className="item">Focus</div>
                <div className="item left-menu__category">Projects</div>
                <div className="projects-list">
                    <div className="item">
                        Study
                    </div>
                    <div className="item">Work</div>
                    <div className="item">Home</div>
                    <div className="item">Shopping</div>
                    <div className="item">Study</div>
                    <div className="item">Work</div>
                    <div className="item">Home</div>
                    <div className="item">Shopping</div>
                    <div className="item">Study</div>
                    <div className="item">Work</div>
                    <div className="item">Home</div>
                    <div className="item">Shopping</div>
                    <div className="item">Study</div>
                    <div className="item">Work</div>
                    <div className="item">Home</div>
                    <div className="item">Shopping</div>
                </div>
            </div>
            <div id="main-content">
                <div className="main__title">Study</div>
                <div className="main__tasks">
                    {['Task 1', 'Task 2', 'Task 3', 'Task 3', 'Task 5', 'Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10',
                        'Task 11', 'Task 12'].map(t => <Task key={t} task={t}/>)}
                </div>
            </div>
        </div>
    </div>
}

export default App;
