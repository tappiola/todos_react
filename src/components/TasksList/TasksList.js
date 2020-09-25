import {Task} from "../Task/Task";
import React from "react";

export const TasksList = () => {
    return <div id="main-content">
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
}
