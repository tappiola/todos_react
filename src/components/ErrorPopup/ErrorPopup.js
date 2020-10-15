import React from "react";
import classes from './ErrorPopup.module.css';
import iconStyles from '../../containers/Icon/Icon.module.css';
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../../containers/Icon/Icon";

export const ErrorPopup = ({error, onErrorDismiss}) => {
    if (!error) {
        return null
    }

    return <div className={classes.popup}>
        <MediumIcon
            iconType={ICON_TYPE.CLOSE}
            color={ICON_COLOR.WHITE}
            classes={[iconStyles.topRight]}
            onClick={onErrorDismiss}
        />
        <h4>{error.type}</h4>
        {error.message}
    </div>
}
