import React, {useCallback, useEffect, useRef, useState} from "react";
import classes from './Task.module.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../components/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants/colors";
import {Button, CancelButton} from "../../components/Button/Button";
import iconStyles from '../../components/Icon/Icon.module.css';
import PropTypes from 'prop-types';

const EMPTY_ID = 'not-selected';

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = useCallback(() => {
        htmlElRef.current && htmlElRef.current.focus()
    }, [])
    return [htmlElRef, setFocus]
}

export const TaskFocusIcon = ({focused, onFocusChange}) => {
    return <Icon
        iconType={ICON_TYPE.STAR}
        color={focused ? ICON_COLOR.YELLOW : ICON_COLOR.WHITE}
        onClick={onFocusChange}
        className={iconStyles.expandable}
    />
}

export const TaskDeleteButton = ({onTaskDelete}) => {
    return <Icon
        iconType={ICON_TYPE.DELETE}
        color={ICON_COLOR.GREY}
        onClick={onTaskDelete}
    />
}

export const TaskCompleteCheckbox = ({complete, color, onTaskCompleteToggle}) => {
    return <Icon
        iconType={complete ? ICON_TYPE.CHECKBOX_COMPLETE : ICON_TYPE.CHECKBOX_INCOMPLETE}
        color={COLORS[color] || DEFAULT_COLOR.colorCode}
        onClick={onTaskCompleteToggle}
        className={iconStyles.taskCheckbox}
    />
}

export const TaskEditButton = ({onTaskEditModeActivate}) => {
    return <Icon
        iconType={ICON_TYPE.EDIT}
        color={ICON_COLOR.GREY}
        onClick={onTaskEditModeActivate}
    />
}

export const Task = (
    {task, currentProject, taskProject, projects, onTaskEdit, onTaskDelete, isActive, onSetActiveTask}
) => {
    const [isHovered, setIsHovered] = useState(false);
    const [inputValue, setInputValue] = useState(task.name);
    const [projectId, setProjectId] = useState(taskProject?.id || EMPTY_ID);
    const [inputRef, setInputFocus] = useFocus();
    const {id} = task;

    useEffect(() => {
        isActive && setInputFocus()
    }, [isActive, setInputFocus]);

    const taskSaveHandler = () => {
        onTaskEdit(id, {name: inputValue, projectId: projectId === EMPTY_ID ? null : projectId});
        onSetActiveTask(null);
    }

    const focusChangeHandler = () => {
        onTaskEdit(id, {isFocusedOn: !task.isFocusedOn});
    };

    const taskCompleteHandler = () => {
        onTaskEdit(id, {isComplete: !task.isComplete});
    }

    const taskEditHandler = () => {
        onSetActiveTask(id);
        setInputValue(task.name);
    }

    return <div
        className={classes.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className={classes.firstRow}>
            <div className={classes.firstRowText}>
                <TaskCompleteCheckbox
                    complete={task.isComplete}
                    color={currentProject.color}
                    onTaskCompleteToggle={taskCompleteHandler}
                />
                {isActive
                    ? <div className={classes.taskEditInputContainer}>
                        <input
                            className={classes.taskEditInput}
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            ref={inputRef}
                        />
                        <select
                            className={classes.projectSelect}
                            defaultValue={projectId}
                            onChange={e => setProjectId(e.target.value)}>
                            <option value={EMPTY_ID}>Not selected</option>
                            {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                    </div>
                    : <span className={classes.text} onClick={() => setIsHovered(!isHovered)}>{task.name}</span>}
            </div>
            <div>
                {!isActive && isHovered && <>
                    <TaskDeleteButton onTaskDelete={() => onTaskDelete(id)}/>
                    <TaskEditButton onTaskEditModeActivate={taskEditHandler}/>
                </>}
                {(currentProject.id === 'focus' && taskProject && !isActive) && <div
                    className={classes.projectLabel}
                    style={{backgroundColor: COLORS[taskProject.color] || DEFAULT_COLOR.colorCode}}
                >{taskProject.name}</div>}
                <TaskFocusIcon focused={task.isFocusedOn} onFocusChange={focusChangeHandler}/>
            </div>
        </div>
        {isActive && <div>
            <Button className={classes.save} disabled={!inputValue} onClick={taskSaveHandler}>Save</Button>
            <CancelButton onClick={() => onSetActiveTask(null)}/>
        </div>}
    </div>
}

TaskFocusIcon.propTypes = {
    focused: PropTypes.bool.isRequired,
    onFocusChange: PropTypes.func
}

TaskDeleteButton.propTypes = {
    onTaskDelete: PropTypes.func.isRequired
}

TaskCompleteCheckbox.propTypes = {
    complete: PropTypes.bool.isRequired,
    color: PropTypes.string,
    onTaskCompleteToggle: PropTypes.func.isRequired
}

TaskEditButton.propTypes = {
    onTaskEditModeActivate: PropTypes.func.isRequired
}

const projectShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string.isRequired
})

const projectShapeOptional = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string
})

const taskShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    createdAt: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projectId: PropTypes.string,
    isFocusedOn: PropTypes.bool.isRequired
})

Task.propTypes = {
    task: taskShape,
    currentProject: projectShapeOptional.isRequired,
    taskProject: projectShapeOptional.isRequired,
    projects: PropTypes.arrayOf(projectShape.isRequired),
    onTaskEdit: PropTypes.func.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    onSetActiveTask: PropTypes.func.isRequired
}
