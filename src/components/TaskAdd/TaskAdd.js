import React, {useState} from "react";
import {COLORS, DEFAULT_COLOR} from "../../constants";
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../../containers/Icon/Icon";
import './TaskAdd.css';

export const TaskAdd = ({project, onTaskAdd, userId}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [taskName, setTaskName] = useState('');

    if (isInputActive) {
        return <form onSubmit={e => {
            e.preventDefault();
            onTaskAdd({projectId: project.id, name: taskName}, userId);
            setTaskName('');
            setIsInputActive(false);
        }}>
            <input
                className="task-add__input"
                maxLength="100"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                ref={input => input && input.focus()}
            />
            <div>
                <button type="submit"
                        disabled={!taskName}
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
        </form>
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
