import React, {useState} from "react";
import './Task.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";

export const Task = ({task, taskComplete, taskFocused}) => {
    const [complete, setComplete] = useState(taskComplete);
    const [focused, setFocused] = useState(taskFocused);

    return <div className="main__task">
        <div>
            <Icon
                iconType={complete ? ICON_TYPE.CHECHBOX_COMPLETE : ICON_TYPE.CHECHBOX_INCOMPLETE}
                color={ICON_COLOR.PURPLE}
                onClick={() => setComplete(!complete)}
            />
            <span>{task}</span>
        </div>
        <div>
            <Icon
                iconType={ICON_TYPE.STAR}
                color={focused ? ICON_COLOR.YELLOW : ICON_COLOR.WHITE}
                onClick={() => setFocused(!focused)}
                classes={['expandable']}
            />
            <Icon
                iconType={ICON_TYPE.DETAILS}
                color={ICON_COLOR.GREY}
                onClick={() => {
                }}
                classes={['expandable']}
            />
        </div>
    </div>
}
