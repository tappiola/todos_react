import React, {useState} from "react";
import './Task.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants";

export const Task = ({task, project, onTaskEdit, onTaskDelete}) => {
    const [complete, setComplete] = useState(task.isComplete);
    const [focused, setFocused] = useState(task.isFocusedOn);
    const [isHovered, setIsHovered] = useState(false);

    return <div
        className="main__task"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div>
            <Icon
                iconType={complete ? ICON_TYPE.CHECHBOX_COMPLETE : ICON_TYPE.CHECHBOX_INCOMPLETE}
                color={COLORS[project.color] || DEFAULT_COLOR.colorCode}
                onClick={() => {
                    const newStatus = !complete;
                    setComplete(newStatus);
                    onTaskEdit(task.id, {isComplete: newStatus});
                }}
                classes={['task-checkbox']}
            />
            <span>{task.name}</span>
        </div>
        <div>
            {isHovered && <>
                <Icon
                    iconType={ICON_TYPE.DELETE}
                    color={ICON_COLOR.GREY}
                    onClick={() => {
                        onTaskDelete(task.id)
                    }}
                />
                <Icon
                    iconType={ICON_TYPE.EDIT}
                    color={ICON_COLOR.GREY}
                    onClick={() => {
                    }}
                />
            </>}
            {(project.id === 'focus' && task.assignedProject) && <div
                className="project-label"
                style={{backgroundColor: COLORS[task.assignedProject.color] || DEFAULT_COLOR.colorCode}}
            >{task.assignedProject.name}</div>}
            <Icon
                iconType={ICON_TYPE.STAR}
                color={focused ? ICON_COLOR.YELLOW : ICON_COLOR.WHITE}
                onClick={() => {
                    const newStatus = !focused;
                    setFocused(newStatus);
                    onTaskEdit(task.id, {isFocusedOn: newStatus});
                }}
                classes={['expandable']}
            />
        </div>
    </div>
}
