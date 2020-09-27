import React, {useState} from "react";
import './Task.css';
import {Icon, ICON_COLOR, ICON_TYPE} from "../../containers/Icon/Icon";
import {COLORS, DEFAULT_COLOR} from "../../constants";

export const Task = ({task, project}) => {
    const [complete, setComplete] = useState(task.isComplete);
    const [focused, setFocused] = useState(task.isFocusedOn);

    return <div className="main__task">
        <div>
            <Icon
                iconType={complete ? ICON_TYPE.CHECHBOX_COMPLETE : ICON_TYPE.CHECHBOX_INCOMPLETE}
                color={COLORS[project.color] || DEFAULT_COLOR.colorCode}
                onClick={() => setComplete(!complete)}
                classes={['task-checkbox']}
            />
            <span>{task.name}</span>
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
