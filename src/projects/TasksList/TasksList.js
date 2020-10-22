import Task from "../Task";
import React, {useState} from "react";
import classes from './TasksList.module.css';
import TaskAdd from "../TaskAdd";
import {Message} from "../../components/Message/Message";
import PropTypes from 'prop-types';

export const TasksList = ({project, tasks}) => {
    const [activeTaskId, setActiveTaskId] = useState(null);

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
                isActive={activeTaskId === task.id}
                onSetActiveTask={taskId => setActiveTaskId(taskId)}
            />)}
        </div>
        {project.name !== 'Focus' && <TaskAdd project={project}/>}
    </div>
}

const taskShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    createdAt: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projectId: PropTypes.string,
    isFocusedOn: PropTypes.bool.isRequired
})

const projectShape = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string
})

TasksList.propTypes = {
    project: projectShape,
    tasks: PropTypes.arrayOf(taskShape)
}
