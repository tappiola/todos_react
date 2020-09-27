import React, {useEffect, useState} from 'react';
import './LeftMenu.css';
import {ProjectsList} from "../ProjectsList/ProjectsList";
import AddProjectModal from "../AddProjectModal";

export const LeftMenu = ({menuOpen, projects, onLoad, onMenuClose}) => {

    const [showAddProjectModal, setShowAddProjectModal] = useState(false);

    useEffect(() => {
        onLoad();
    }, [onLoad])

    return <>
        {showAddProjectModal && <AddProjectModal onModalClose={() => setShowAddProjectModal(false)}/>}
        {menuOpen && <div className="backdrop-mobile" onClick={onMenuClose}/>}
        <div id="left-menu" className={menuOpen ? '' : 'hidden'}>
            <ProjectsList
                projects={projects}
                onMenuClose={onMenuClose}
                onProjectAdd={() => setShowAddProjectModal(true)}
            />
        </div>
    </>
}
