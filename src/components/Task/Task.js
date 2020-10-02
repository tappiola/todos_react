import React, {useEffect, useState} from "react";
import './Task.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants";

export const Task = (
    {task, currentProject, taskProject, projects, onTaskEdit, onTaskDelete, activeTaskId, onSetActiveTask}
) => {
    const [complete, setComplete] = useState(task.isComplete);
    const [focused, setFocused] = useState(task.isFocusedOn);
    const [isHovered, setIsHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState(task.name);
    const [projectId, setProjectId] = useState(taskProject?.id || 'not-selected');

    const {id} = task;

    useEffect(() => {
        if (id !== activeTaskId) {
            setIsInputActive(false);
        }
    }, [activeTaskId, id]);

    return <div
        className="task__container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className="task__first-row">
            <div className="task__first-row-text">
                <Icon
                    iconType={complete ? ICON_TYPE.CHECKBOX_COMPLETE : ICON_TYPE.CHECKBOX_INCOMPLETE}
                    color={COLORS[currentProject.color] || DEFAULT_COLOR.colorCode}
                    onClick={() => {
                        const newStatus = !complete;
                        setComplete(newStatus);
                        onTaskEdit(id, {isComplete: newStatus});
                    }}
                    classes={['task-checkbox']}
                />
                {isInputActive ? <div className="task-edit__input-container">
                    <input className="task-edit__input"
                           value={inputValue}
                           onChange={e => setInputValue(e.target.value)}
                           ref={input => input && input.focus()}
                    />
                    <select id="project-select"
                            defaultValue={projectId}
                            onChange={e => {
                                setProjectId(e.target.value)
                            }}>
                        <option value="not-selected">Not selected</option>
                        {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                </div> : <span className="task__text" onClick={() => setIsHovered(!isHovered)}>{task.name}</span>}
            </div>
            <div>
                {!isInputActive && isHovered && <>
                    <Icon
                        iconType={ICON_TYPE.DELETE}
                        color={ICON_COLOR.GREY}
                        onClick={() => {
                            onTaskDelete(id)
                        }}
                    />
                    <Icon
                        iconType={ICON_TYPE.EDIT}
                        color={ICON_COLOR.GREY}
                        onClick={() => {
                            onSetActiveTask(id);
                            setIsInputActive(true);
                            setInputValue(task.name);
                        }}
                    />
                </>}
                {(currentProject.id === 'focus' && taskProject && !isInputActive) && <div
                    className="project-label"
                    style={{backgroundColor: COLORS[taskProject.color] || DEFAULT_COLOR.colorCode}}
                >{taskProject.name}</div>}
                <Icon
                    iconType={ICON_TYPE.STAR}
                    color={focused ? ICON_COLOR.YELLOW : ICON_COLOR.WHITE}
                    onClick={() => {
                        const newStatus = !focused;
                        setFocused(newStatus);
                        onTaskEdit(id, {isFocusedOn: newStatus});
                    }}
                    classes={['expandable']}
                />
            </div>
        </div>
        {isInputActive && <div>
            <button
                disabled={!inputValue}
                onClick={() => {
                    onTaskEdit(id, {name: inputValue, projectId: projectId === 'not-selected' ? null : projectId});
                    setIsInputActive(false);
                }}>Save
            </button>
            <button className="cancel-button" onClick={() => {
                setIsInputActive(false);
            }}>Cancel
            </button>
        </div>}
    </div>
}
