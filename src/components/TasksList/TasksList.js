import Task from "../Task";
import React, {useEffect, useState} from "react";
import './TasksList.css';
import TaskAdd from "../TaskAdd";

export const TasksList = ({project, tasks, onLoad, isProjectsFetching}) => {
    const [activeTaskId, setActiveTaskId] = useState(null);

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
            {tasks.map(task => <Task
                key={task.id}
                task={task}
                currentProject={project}
                taskProject={project.id === 'focus' ? task.assignedProject : project}
                activeTaskId={activeTaskId}
                onSetActiveTask={taskId => setActiveTaskId(taskId)}/>)}
        </div>
        {project.name !== 'Focus' && <TaskAdd project={project}/>}
    </div>
}
