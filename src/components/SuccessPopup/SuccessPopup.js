import React from "react";
import classes from './SuccessPopup.module.css';
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../Icon/Icon";
import iconStyles from '../Icon/Icon.module.css';

export const SuccessPopup = ({successMessage, onSuccessDismiss}) => {
    if (!successMessage) {
        return null
    }

    return <div className={classes.popup}>
        <MediumIcon
            iconType={ICON_TYPE.CLOSE}
            color={ICON_COLOR.WHITE}
            className={iconStyles.topRight}
            onClick={onSuccessDismiss}
        />
        {successMessage}
    </div>
}
