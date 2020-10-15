import classes from './ProjectModal.module.css';
import React, {useCallback, useState} from "react";
import {COLORS_LIST, DEFAULT_COLOR, getColorObject} from "../../constants/colors";
import {ColorSelector} from "../../containers/ColorSelector/ColorSelector";
import {useHistory} from "react-router";
import {URLS} from "../../constants/urls";
import {Button, CancelButton, DeleteButton} from "../../containers/Button/Button";

export const ProjectModal = ({project, onModalClose, onProjectAdd, onProjectEdit, onProjectDelete}) => {
    const [name, setName] = useState(project?.name || '');
    const [description, setDescription] = useState(project?.description || '');
    const [color, setColor] = useState(project?.color ? getColorObject(project.color) : DEFAULT_COLOR);
    const history = useHistory();

    const deleteHandler = useCallback(() => {
        onProjectDelete(project.id);
        onModalClose();
        history.push(URLS.INBOX);
    }, [history, onModalClose, onProjectDelete, project]);

    const projectHandler = useCallback(() => {
        project
            ? onProjectEdit(project.id, {name, description, color: color.humanColor})
            : onProjectAdd({name, description, color: color.humanColor});
        onModalClose();
    }, [color.humanColor, description, name, onModalClose, onProjectAdd, onProjectEdit, project]);

    return <>
        <div className={classes.backdrop}/>
        <div className={classes.modal}>
            <div className={classes.title}>{project ? 'Edit' : 'Add'} project</div>
            <input
                className={classes.name}
                placeholder="Title"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <textarea
                rows="5"
                className={classes.description}
                maxLength="300"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <ColorSelector
                options={COLORS_LIST}
                color={color}
                onColorChange={color => setColor(color)}
            />
            <div className={classes.buttonContainer}>
                {project && <DeleteButton onClick={deleteHandler}/>}
                <CancelButton onClick={onModalClose}/>
                <Button onClick={projectHandler} disabled={!name}>{project ? 'Save' : 'Add'}</Button>
            </div>
        </div>
    </>
}
