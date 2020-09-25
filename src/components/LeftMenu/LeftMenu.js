import React, {useEffect} from 'react';
import './LeftMenu.css';
import {Icon, ICON_COLOR, ICON_TYPE, MediumIcon, SmallIcon} from "../../containers/Icon/Icon";

export const LeftMenu = ({menuOpen, projects, onLoad}) => {

    // const dispatch = useDispatch();

    useEffect(() => {
        onLoad();
    }, [onLoad])


    const Project = ({name}) => <div className="project-item">
        <div>
            <SmallIcon iconType={ICON_TYPE.CIRCLE} color={ICON_COLOR.YELLOW}/>
            {name}
        </div>
        <MediumIcon iconType={ICON_TYPE.EDIT} color={ICON_COLOR.GREY} classes={['show-hover']}/>
    </div>

    return <div id="left-menu" className={menuOpen ? '' : 'hidden'}>
        <div className="left-menu__items">
            <div className="item">
                <Icon iconType={ICON_TYPE.INBOX} color={ICON_COLOR.BLUE}/>
                Inbox
            </div>
            <div className="item">
                <Icon iconType={ICON_TYPE.STAR} color={ICON_COLOR.YELLOW}/>
                Focus
            </div>
            <div className="item left-menu__category">
                <div>
                    <Icon iconType={ICON_TYPE.PROJECTS} color={ICON_COLOR.PINK}/>
                    Projects
                </div>
                <MediumIcon iconType={ICON_TYPE.ADD} color={ICON_COLOR.GREY} classes={['expandable']}/>
            </div>
            <div className="projects-list">
                {projects.map((p, i) => <Project key={i} name={p.name}/>)}
            </div>
        </div>
    </div>
}
