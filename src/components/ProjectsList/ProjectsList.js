import React from 'react';
import './ProjectsList.css';
import {Icon, ICON_COLOR, ICON_TYPE, MediumIcon, SmallIcon} from "../../containers/Icon/Icon";
import {NavLink} from "react-router-dom";
import {COLORS, DEFAULT_COLOR} from "../../constants";

export const ProjectsList = ({projects, onMenuClose, onProjectAdd}) => {

    const Project = ({project}) =>
        <NavLink to={`/projects/${project.id}`}>
            <div className="project-item" onClick={onMenuClose}>
                <div>
                    <SmallIcon iconType={ICON_TYPE.CIRCLE} color={COLORS[project.color] || DEFAULT_COLOR.colorCode}
                               classes={['bullet-point']}/>
                    {project.name}
                </div>
                <MediumIcon iconType={ICON_TYPE.EDIT} color={ICON_COLOR.GREY} classes={['show-hover']}/>
            </div>
        </NavLink>

    return <div className="left-menu__items">
        <NavLink to={`/inbox`}>
            <div className="item" onClick={onMenuClose}>
                <Icon iconType={ICON_TYPE.INBOX} color={ICON_COLOR.BLUE}/>
                Inbox
            </div>
        </NavLink>
        <NavLink to={`/focus`}>
            <div className="item" onClick={onMenuClose}>
                <Icon iconType={ICON_TYPE.STAR} color={ICON_COLOR.YELLOW}/>
                Focus
            </div>
        </NavLink>
        <div className="item left-menu__category">
            <div>
                <Icon iconType={ICON_TYPE.PROJECTS} color={ICON_COLOR.PINK}/>
                Projects
            </div>
            <MediumIcon
                iconType={ICON_TYPE.ADD}
                color={ICON_COLOR.GREY}
                classes={['expandable']}
                onClick={onProjectAdd}
            />
        </div>
        <div className="projects-list">
            {projects.map((p, i) => <Project key={i} project={p}/>)}
        </div>
    </div>
}
