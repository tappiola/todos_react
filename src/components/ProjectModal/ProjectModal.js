import './ProjectModal.css';
import React, {useState} from "react";
import {COLORS_LIST, DEFAULT_COLOR, getColorObject} from "../../constants";
import {ColorSelector} from "../../containers/ColorSelector/ColorSelector";

export const ProjectModal = ({project, onModalClose, onProjectAdd, onProjectEdit}) => {
    const [name, setName] = useState(project?.name || '');
    const [description, setDescription] = useState(project?.description || '');
    const [color, setColor] = useState(project?.color ? getColorObject(project.color) : DEFAULT_COLOR);

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