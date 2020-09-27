import {Task} from "../Task/Task";
import React, {useEffect} from "react";

export const TasksList = ({projectId, project, tasks, onLoad, isProjectsFetching}) => {

    useEffect(() => {
        onLoad();
    }, [onLoad])

    if (isProjectsFetching) {
        return null;
    }

    return <div id="main-content">
        <div className="main__title">{project.name}</div>
        {project.description && <div className="main__description">{project.description}</div>}
        <div className="main__tasks">
            {tasks.map(task => <Task key={task.id} task={task} project={project}/>)}
        </div>
    </div>
}
