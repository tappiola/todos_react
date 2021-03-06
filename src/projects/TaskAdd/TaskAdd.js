import React, {useState} from "react";
import {COLORS, DEFAULT_COLOR} from "../../constants/colors";
import {ICON_TYPE, MediumIcon} from "../../components/Icon/Icon";
import classes from './TaskAdd.module.css';
import {Button, CancelButton} from "../../components/Button/Button";
import iconStyles from '../../components/Icon/Icon.module.css';
import PropTypes from 'prop-types';

export const TaskAdd = ({project, onTaskAdd}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);
    const [taskName, setTaskName] = useState('');

    if (isInputActive) {
        return <form
            onSubmit={e => {
                e.preventDefault();
                onTaskAdd({projectId: project.id, name: taskName});
                setTaskName('');
                setIsInputActive(false);
            }}>
            <input
                className={classes.input}
                maxLength="100"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                ref={input => input && input.focus()}
            />
            <div>
                <Button type="submit" disabled={!taskName}>Add task</Button>
                <CancelButton
                    onClick={() => {
                        setIsInputActive(false);
                        setTaskName('');
                    }}
                />
            </div>
        </form>
    } else {
        return <div
            className={classes.button}
            style={isHovered ? {color: COLORS[project.color] || DEFAULT_COLOR.colorCode} : {}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsInputActive(true)}
        >
            <MediumIcon iconType={ICON_TYPE.ADD} color='inherit' className={iconStyles.bulletPoint}/>
            Add task
        </div>
    }
}

const projectShape = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string
})

TaskAdd.propTypes = {
    project: projectShape,
    onTaskAdd: PropTypes.func.isRequired
}
