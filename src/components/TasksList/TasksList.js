import {Task} from "../Task/Task";
import React, {useEffect} from "react";

export const TasksList = ({projectId, tasks, onLoad}) => {
    useEffect(() => {
        onLoad();
    }, [onLoad])

    return <div id="main-content">
        <div className="main__title">Study</div>
        <div className="main__description">Giant pandas have a distinctive black and white coat, with black fur
            around their eyes and on their ears, muzzle, legs and shoulders. Their thick, wooly coat helps to
            keep them warm in their cool mountain homes. Adult pandas are about 150cm from nose to rump, with a
            10-15cm tail.
        </div>
        <div className="main__tasks">
            {tasks.map(t => <Task key={t.id} task={t}/>)}
        </div>
    </div>
}
