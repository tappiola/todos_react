import './Icon.css';
import React from "react";
import {COLORS} from "../../constants";

export const ICON_TYPE = {
    CHECKBOX_COMPLETE: 'fa-check-square',
    CHECKBOX_INCOMPLETE: 'fa-square',
    STAR: 'fa-star',
    INBOX: 'fa-inbox',
    PROJECTS: 'fa-tasks',
    CIRCLE: 'fa-circle',
    ADD: 'fa-plus-circle',
    DETAILS: 'fa-chevron-right',
    DELETE: 'fa-trash-alt',
    EDIT: 'fa-edit',
    CLOSE: 'fa-times',
    SELECTOR: 'fa-caret-down',
    SELECTOR_OPEN: 'fa-caret-up'
}

export const ICON_COLOR = {
    PURPLE: 'darkslateblue',
    ORANGE: COLORS.Orange,
    YELLOW: COLORS.Yellow,
    WHITE: 'hsla(0, 0%, 100%, 0.87)',
    BLUE: COLORS["Light Blue"],
    PINK: COLORS.Salmon,
    GREY: COLORS.Grey,
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
export const SmallIcon = ({iconType, color, onClick, classes = []}) => {
    return <span className="icon-small" style={{color}} onClick={onClick}>
                <i className={`fas ${iconType} ${classes.join(' ')}`}/>
            </span>
}
