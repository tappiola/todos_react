import React from 'react';
import classes from './ProjectsList.module.css';
import iconStyles from '../../components/Icon/Icon.module.css';
import {Icon, ICON_COLOR, ICON_TYPE, MediumIcon, SmallIcon} from "../../components/Icon/Icon";
import {NavLink} from "react-router-dom";
import {COLORS, DEFAULT_COLOR} from "../../constants/colors";
import {URLS} from "../../constants/urls";
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Project = ({project, onMenuClose, onProjectEdit}) =>
    <NavLink to={`${URLS.PROJECTS}/${project.id}`} activeClassName={classes.active}>
        <div className={classes.projectItem} onClick={onMenuClose}>
            <div>
                <SmallIcon
                    iconType={ICON_TYPE.CIRCLE}
                    color={COLORS[project.color] || DEFAULT_COLOR.colorCode}
                    className={iconStyles.bulletPoint}
                />
                {project.name}
            </div>
            <MediumIcon
                iconType={ICON_TYPE.EDIT}
                color={ICON_COLOR.GREY}
                className={clsx(iconStyles.showHover, classes.editIcon)}
                onClick={() => onProjectEdit(project)}
            />
        </div>
    </NavLink>

export const ProjectsList = ({projects, onMenuClose, onProjectAdd, onProjectEdit}) => {

    return <div className={classes.menuItems}>
        <NavLink to={URLS.INBOX} activeClassName={classes.active}>
            <div className={classes.menuItem} onClick={onMenuClose}>
                <Icon iconType={ICON_TYPE.INBOX} color={ICON_COLOR.BLUE}/>
                Inbox
            </div>
        </NavLink>
        <NavLink to={URLS.FOCUS} activeClassName={classes.active}>
            <div className={classes.menuItem} onClick={onMenuClose}>
                <Icon iconType={ICON_TYPE.STAR} color={ICON_COLOR.YELLOW}/>
                Focus
            </div>
        </NavLink>
        <div className={`${classes.menuItem} ${classes.category}`}>
            <div>
                <Icon iconType={ICON_TYPE.PROJECTS} color={ICON_COLOR.PINK}/>
                Projects
            </div>
            <MediumIcon
                iconType={ICON_TYPE.ADD}
                color={ICON_COLOR.GREY}
                className={clsx(iconStyles.expandable, classes.addIcon)}
                onClick={onProjectAdd}
            />
        </div>
        <div>
            {projects.map((p, i) => (
                <Project
                    key={i}
                    project={p}
                    onMenuClose={onMenuClose}
                    onProjectEdit={onProjectEdit}
                />))}
        </div>
    </div>
}

const projectShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
})

Project.propTypes = {
    project: projectShape.isRequired,
    onMenuClose: PropTypes.func.isRequired,
    onProjectEdit: PropTypes.func.isRequired
};

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(projectShape),
    onMenuClose: PropTypes.func.isRequired,
    onProjectAdd: PropTypes.func.isRequired,
    onProjectEdit: PropTypes.func.isRequired
}
