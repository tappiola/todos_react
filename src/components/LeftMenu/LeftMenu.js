import React, {useEffect, useState} from 'react';
import classes from './LeftMenu.module.css';
import ProjectsList from "../ProjectsList";
import ProjectModal from "../ProjectModal";

export const LeftMenu = ({menuOpen, projects, onLoad, onMenuClose}) => {

    const [showAddProjectModal, setShowAddProjectModal] = useState(false);
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [editedProject, setEditedProject] = useState({});

    useEffect(() => onLoad(), [onLoad]);

    return <>
        {showAddProjectModal && <ProjectModal onModalClose={() => setShowAddProjectModal(false)}/>}
        {showEditProjectModal &&
        <ProjectModal
            onModalClose={() => {
                setShowEditProjectModal(false);
                setEditedProject({});
            }}
            project={editedProject}
        />}
        {menuOpen && <div className={classes.backdropMobile} onClick={onMenuClose}/>}
        <div className={`${classes.menu} ${menuOpen ? '' : classes.hidden}`}>
            <ProjectsList
                projects={projects}
                onMenuClose={onMenuClose}
                onProjectAdd={() => setShowAddProjectModal(true)}
                onProjectEdit={project => {
                    setShowEditProjectModal(true);
                    setEditedProject(project);
                }}
            />
        </div>
    </>
}
