import React from "react";
import './Task.css';

export const Task = ({task}) => {
    return <div className="main__task">
        <input type="checkbox" className="item-checkbox"/>
        <span>{task}</span>
    </div>
}
