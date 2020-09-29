import React, {useState} from "react";
import {COLORS, DEFAULT_COLOR} from "../../constants";
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../../containers/Icon/Icon";
import './TaskAdd.css';

export const TaskAdd = ({project, onTaskAdd}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [taskName, setTaskName] = useState('');

    if (isInputActive) {
        return <>
            <input
                className="task-add__input"
                maxLength="100"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
            />
            <div>
                <button
                    disabled={!taskName}
                    onClick={() => {
                        onTaskAdd({projectId: project.id, name: taskName});
                        setTaskName('');
                        setIsInputActive(false);
                    }}
                >Add task
                </button>
                <button
                    className="cancel-button"
                    onClick={() => {
                        setIsInputActive(false);
                        setTaskName('');
                    }}
                >Cancel
                </button>
            </div>
        </>
    } else {
        return <div
            className="task-add__button"
            style={isHovered ? {color: COLORS[project.color] || DEFAULT_COLOR.colorCode} : {}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsInputActive(true)}
        >
            <MediumIcon iconType={ICON_TYPE.ADD} color={ICON_COLOR} classes={['bullet-point']}/>
            Add task
        </div>
    }
}
