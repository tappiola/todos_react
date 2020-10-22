import styles from './Icon.module.css';
import React from "react";
import {COLORS} from "../../constants/colors";
import PropTypes from 'prop-types';

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

export const Icon = ({iconType, color, onClick, className = '', ...otherProps}) => {
    return <span
        {...otherProps}
        className={styles.icon}
        style={{color}}
        onClick={onClick}
    >
        <i className={`fas ${iconType} ${className}`}/>
    </span>
}

export const MediumIcon = ({iconType, color, onClick, className = '', ...otherProps}) => {
    return <span
        {...otherProps}
        className={styles.iconMedium}
        style={{color}}
        onClick={onClick}
    >
        <i className={`fas ${iconType} ${className}`}/>
    </span>
}
export const SmallIcon = ({iconType, color, onClick, className = '', ...otherProps}) => {
    return <span
        {...otherProps}
        className={styles.iconSmall}
        style={{color}}
        onClick={onClick}
    >
        <i className={`fas ${iconType} ${className}`}/>
    </span>
}

Icon.propTypes = {
    iconType: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    otherProps: PropTypes.object
};

MediumIcon.propTypes = {
    iconType: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    otherProps: PropTypes.object
};

SmallIcon.propTypes = {
    iconType: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    otherProps: PropTypes.object
};
