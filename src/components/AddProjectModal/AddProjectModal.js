import './AddProjectModal.css';
import React, {useState} from "react";
import {COLORS_LIST, DEFAULT_COLOR} from "../../constants";
import {ColorSelector} from "../../containers/ColorSelector/ColorSelector";

export const AddProjectModal = ({onModalClose, onProjectAdd}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState(DEFAULT_COLOR);

    return <>
        <div className="backdrop"/>
        <div className="project-modal">
            <div className="project-modal__title">Add project</div>
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
                        onProjectAdd({name, description, color: color.humanColor});
                        onModalClose();
                    }}
                    disabled={!name}
                >Add
                </button>
            </div>
        </div>
    </>
}
