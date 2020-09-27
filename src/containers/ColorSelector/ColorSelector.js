import React, {useEffect, useRef, useState} from "react";
import './ColorSelector.css';
import {ICON_COLOR, ICON_TYPE, SmallIcon} from "../Icon/Icon";

export const ColorSelector = ({options, color, onColorChange}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsSelectOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <div className="color-select-container">
        <div className="input-label">Project color</div>
        <div className="selected-color" onClick={() => setIsSelectOpen(true)}>
            <div>
                <SmallIcon color={color.colorCode} iconType={ICON_TYPE.CIRCLE} classes={['bullet-point']}/>
                {color.humanColor}
            </div>
            <SmallIcon
                color={ICON_COLOR.WHITE}
                iconType={isSelectOpen ? ICON_TYPE.SELECTOR_OPEN : ICON_TYPE.SELECTOR}
                classes={['selector']}
            />
        </div>
        {isSelectOpen && <ul className="color-select" ref={ref}>
            {options.map(c => <li key={c.humanColor}
                                  onClick={() => {
                                      onColorChange(c);
                                      setIsSelectOpen(false)
                                  }}>
                <SmallIcon color={c.colorCode} iconType={ICON_TYPE.CIRCLE} classes={['bullet-point']}/>
                {c.humanColor}</li>)
            }
        </ul>}
    </div>
}
