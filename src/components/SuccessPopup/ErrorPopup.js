import React from "react";
import './ErrorPopup.css';
import {ICON_COLOR, ICON_TYPE, MediumIcon} from "../../containers/Icon/Icon";

export const ErrorPopup = ({error, onErrorDismiss}) => {
    if (!error) {
        return null
    }

    return <div className='error-popup'>
        <MediumIcon
            iconType={ICON_TYPE.CLOSE}
            color={ICON_COLOR.WHITE}
            classes={["top-right"]}
            onClick={onErrorDismiss}
        />
        <h4>{error.type}</h4>
        {JSON.stringify(error.message)}</div>
}
