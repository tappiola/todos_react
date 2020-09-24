import React, {useState} from 'react';
import './App.css';
import {Task} from "./components/Task/Task";
import {HamburgerButton} from "./containers/HamburgerButton/HamburgerButton";
import {LeftMenu} from "./components/LeftMenu/LeftMenu";

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
            <div id="main-content">
                <div className="main__title">Study</div>
                <div className="main__description">Giant pandas have a distinctive black and white coat, with black fur
                    around their eyes and on their ears, muzzle, legs and shoulders. Their thick, wooly coat helps to
                    keep them warm in their cool mountain homes. Adult pandas are about 150cm from nose to rump, with a
                    10-15cm tail.
                </div>
                <div className="main__tasks">
                    {['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10',
                        'Task 11', 'Task 12'].map(t => <Task key={t} task={t}/>)}
                </div>
            </div>
        </div>
    </div>
}

export default App;
