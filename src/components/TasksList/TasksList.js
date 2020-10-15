import Task from "../Task";
import React, {useEffect, useState} from "react";
import classes from './TasksList.module.css';
import TaskAdd from "../TaskAdd";
import {Message} from "../../containers/Message/Message";

export const TasksList = ({project, tasks, onLoad, isProjectsFetching}) => {
    const [activeTaskId, setActiveTaskId] = useState(null);

    useEffect(() => {
        onLoad();
    }, [onLoad])

    if (isProjectsFetching) {
        return null;
    }

    if (!project) {
        return <Message>Project doesn't exist</Message>
    }

    return <div className={classes.container}>
        <div className={classes.title}>{project.name}</div>
        {project.description && <div className={classes.description}>{project.description}</div>}
        <div className={classes.list}>
            {tasks.map(task => <Task
                key={task.id}
                task={task}
                currentProject={project}
                taskProject={project.id === 'focus' ? task.assignedProject : project}
                activeTaskId={activeTaskId}
                onSetActiveTask={taskId => setActiveTaskId(taskId)}
            />)}
        </div>
        {project.name !== 'Focus' && <TaskAdd project={project}/>}
    </div>
}
