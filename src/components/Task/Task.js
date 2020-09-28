import React, {useState} from "react";
import './Task.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants";

export const Task = ({task, project, onTaskEdit}) => {
    const [complete, setComplete] = useState(task.isComplete);
    const [focused, setFocused] = useState(task.isFocusedOn);

    return <div className="main__task">
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
            {project.id === 'focus' && <div
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
            <Icon
                iconType={ICON_TYPE.DETAILS}
                color={ICON_COLOR.GREY}
                onClick={() => {
                }}
                classes={['expandable']}
            />
        </div>
    </div>
}
