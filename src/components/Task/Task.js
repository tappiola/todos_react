import React, {useCallback, useEffect, useRef, useState} from "react";
import classes from './Task.module.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants/colors";
import {Button, CancelButton} from "../../containers/Button/Button";
import iconStyles from '../../containers/Icon/Icon.module.css';

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
        classes={[iconStyles.expandable]}
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
        classes={[iconStyles.taskCheckbox]}
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
    {task, currentProject, taskProject, projects, onTaskEdit, onTaskDelete, activeTaskId, onSetActiveTask}
) => {
    const [complete, setComplete] = useState(task.isComplete);
    const [focused, setFocused] = useState(task.isFocusedOn);
    const [isHovered, setIsHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState(task.name);
    const [projectId, setProjectId] = useState(taskProject?.id || EMPTY_ID);
    const [inputRef, setInputFocus] = useFocus();
    const {id} = task;

    useEffect(() => {
        if (id !== activeTaskId) {
            setIsInputActive(false);
        }
    }, [activeTaskId, id]);

    useEffect(() => {
        isInputActive && setInputFocus()
    }, [isInputActive, setInputFocus]);

    const taskSaveHandler = () => {
        onTaskEdit(id, {name: inputValue, projectId: projectId === EMPTY_ID ? null : projectId});
        setIsInputActive(false);
    }

    const focusChangeHandler = () => {
        const newStatus = !focused;
        setFocused(newStatus);
        onTaskEdit(id, {isFocusedOn: newStatus});
    };

    const taskCompleteHandler = () => {
        const newStatus = !complete;
        setComplete(newStatus);
        onTaskEdit(id, {isComplete: newStatus});
    }

    const taskEditHandler = () => {
        onSetActiveTask(id);
        setIsInputActive(true);
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
                    complete={complete}
                    color={currentProject.color}
                    onTaskCompleteToggle={taskCompleteHandler}
                />
                {isInputActive
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
                {!isInputActive && isHovered && <>
                    <TaskDeleteButton onTaskDelete={() => onTaskDelete(id)}/>
                    <TaskEditButton onTaskEditModeActivate={taskEditHandler}/>
                </>}
                {(currentProject.id === 'focus' && taskProject && !isInputActive) && <div
                    className={classes.projectLabel}
                    style={{backgroundColor: COLORS[taskProject.color] || DEFAULT_COLOR.colorCode}}
                >{taskProject.name}</div>}
                <TaskFocusIcon focused={focused} onFocusChange={focusChangeHandler}/>
            </div>
        </div>
        {isInputActive && <div>
            <Button classes={[classes.save]} disabled={!inputValue} onClick={taskSaveHandler}>Save</Button>
            <CancelButton onClick={() => setIsInputActive(false)}/>
        </div>}
    </div>
}
