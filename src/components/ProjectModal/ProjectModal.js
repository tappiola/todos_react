import './ProjectModal.css';
import React, {useState} from "react";
import {COLORS_LIST, DEFAULT_COLOR, getColorObject} from "../../constants";
import {ColorSelector} from "../../containers/ColorSelector/ColorSelector";
import {useHistory} from "react-router";
import {URLS} from "../../urls";

export const ProjectModal = ({project, onModalClose, onProjectAdd, onProjectEdit, onProjectDelete}) => {
    const [name, setName] = useState(project?.name || '');
    const [description, setDescription] = useState(project?.description || '');
    const [color, setColor] = useState(project?.color ? getColorObject(project.color) : DEFAULT_COLOR);
    const history = useHistory();

    return <>
        <div className="backdrop"/>
        <div className="project-modal">
            <div className="project-modal__title">{project ? 'Edit' : 'Add'} project</div>
            <input
                className="project-modal__name"
                placeholder="Title"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <textarea rows="5"
                      className="project-modal__description"
                      maxLength="300"
                      placeholder="Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}/>
            <ColorSelector
                options={COLORS_LIST}
                color={color}
                onColorChange={color => setColor(color)}
            />
            <div className="button-container">
                {project && <button className="delete-button" onClick={() => {
                    onProjectDelete(project.id);
                    onModalClose();
                    history.push(URLS.INBOX);
                }}>Delete
                </button>}
                <button className="cancel-button" onClick={onModalClose}>Cancel</button>
                <button
                    onClick={() => {
                        project ?
                            onProjectEdit(project.id, {name, description, color: color.humanColor})
                            : onProjectAdd({name, description, color: color.humanColor});
                        onModalClose();
                    }}
                    disabled={!name}
                >{project ? 'Save' : 'Add'}
                </button>
            </div>
        </div>
    </>
}
