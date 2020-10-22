import React, {useEffect, useRef, useState} from "react";
import classes from './ColorSelector.module.css';
import iconStyles from '../Icon/Icon.module.css';
import {ICON_COLOR, ICON_TYPE, SmallIcon} from "../Icon/Icon";
import PropTypes from "prop-types";

export const ColorSelector = ({options = [], color, onColorChange}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const ref = useRef(null);
    const selectedRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)
                && selectedRef.current && !selectedRef.current.contains(event.target)) {
                setIsSelectOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <div>
        <div className={classes.inputLabel}>Project color</div>
        <div className={classes.selectedColor}
             onClick={() => setIsSelectOpen(!isSelectOpen)}
             ref={selectedRef}
        >
            <div>
                <SmallIcon
                    color={color.colorCode}
                    iconType={ICON_TYPE.CIRCLE}
                    className={iconStyles.bulletPoint}
                />
                {color.humanColor}
            </div>
            <SmallIcon
                color={ICON_COLOR.WHITE}
                iconType={isSelectOpen ? ICON_TYPE.SELECTOR_OPEN : ICON_TYPE.SELECTOR}
                className={iconStyles.selector}
            />
        </div>
        {isSelectOpen && <ul className={classes.select} ref={ref}>
            {options.map(c => <li key={c.humanColor}
                                  onClick={() => {
                                      onColorChange(c);
                                      setIsSelectOpen(false)
                                  }}>
                <SmallIcon color={c.colorCode} iconType={ICON_TYPE.CIRCLE} className={iconStyles.bulletPoint}/>
                {c.humanColor}</li>)
            }
        </ul>}
    </div>
}

const colorShape = PropTypes.shape({
    humanColor: PropTypes.string.isRequired,
    colorCode: PropTypes.string.isRequired
});

ColorSelector.propTypes = {
    options: PropTypes.arrayOf(colorShape).isRequired,
    color: colorShape.isRequired,
    onColorChange: PropTypes.func.isRequired
}
