import React from "react";
import classes from './ErrorPopup.module.css';
import iconStyles from '../Icon/Icon.module.css';
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../Icon/Icon";
import PropTypes from "prop-types";

export const ErrorPopup = ({error, onErrorDismiss}) => {
    if (!error) {
        return null
    }

    return <div className={classes.popup}>
        <MediumIcon
            iconType={ICON_TYPE.CLOSE}
            color={ICON_COLOR.WHITE}
            className={iconStyles.topRight}
            onClick={onErrorDismiss}
        />
        <h4>{error.type}</h4>
        <span>{error.message}</span>
    </div>
}

ErrorPopup.propTypes = {
    error: PropTypes.string,
    onErrorDismiss: PropTypes.func.isRequired
}
