import './Icon.css';
import React from "react";

export const ICON_TYPE = {
    CHECHBOX_COMPLETE: 'fa-check-square',
    CHECHBOX_INCOMPLETE: 'fa-square',
    STAR: 'fa-star',
    INBOX: 'fa-inbox',
    PROJECTS: 'fa-tasks',
    CIRCLE: 'fa-circle',
    ADD: 'fa-plus-circle',
    DETAILS: 'fa-chevron-right',
    DELETE: 'fa-trash-alt',
    EDIT: 'fa-edit'
}

export const ICON_COLOR = {
    PURPLE: 'darkslateblue',
    ORANGE: 'orange',
    YELLOW: 'rgba(255, 191, 0, 0.89)',
    WHITE: 'hsla(0, 0%, 100%, 0.87)',
    BLUE: 'lightskyblue',
    PINK: 'palevioletred',
    GREY: 'grey',
}

export const Icon = ({iconType, color, onClick, classes = []}) => {
    return <span className="icon" style={{color}} onClick={onClick}>
                <i className={`fas ${iconType} ${classes.join(' ')}`}/>
            </span>
}

export const MediumIcon = ({iconType, color, onClick, classes = []}) => {
    return <span className="icon-medium" style={{color}} onClick={onClick}>
            <i className={`fas ${iconType} ${classes.join(' ')}`}/>
        </span>
}
export const SmallIcon = ({iconType, color}) => {
    return <span className="icon-small" style={{color}}>
                <i className={`fas ${iconType}`}/>
            </span>
}
