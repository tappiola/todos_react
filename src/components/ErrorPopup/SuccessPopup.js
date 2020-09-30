import React from "react";
import './SuccessPopup.css';
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../../containers/Icon/Icon";

export const SuccessPopup = ({successMessage, onSuccessDismiss}) => {
    if (!successMessage) {
        return null
    }

    return <div className='error-popup'>
        <MediumIcon
            iconType={ICON_TYPE.CLOSE}
            color={ICON_COLOR.WHITE}
            classes={["top-right"]}
            onClick={onSuccessDismiss}
        />
        {successMessage}</div>
}
