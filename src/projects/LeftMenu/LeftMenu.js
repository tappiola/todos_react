import React, {useState} from 'react';
import classes from './LeftMenu.module.css';
import ProjectsList from "../ProjectsList";
import ProjectModal from "../ProjectModal";
import PropTypes from 'prop-types';

export const LeftMenu = ({menuOpen, projects, onMenuClose}) => {

    const [showAddProjectModal, setShowAddProjectModal] = useState(false);
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [editedProject, setEditedProject] = useState({});

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
const projectShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
})

LeftMenu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    projects: PropTypes.arrayOf(projectShape),
    onMenuClose: PropTypes.func
}
