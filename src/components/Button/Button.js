import styles from './Button.module.css';
import React from "react";
import clsx from 'clsx';

export const Button = ({className = '', children, ...otherProps}) => {
    return <button {...otherProps} className={clsx(className, styles.button)}>{children}</button>;
}

export const CancelButton = ({className = '', children, ...otherProps}) => {
    return <Button {...otherProps} className={clsx(className, styles.cancelButton)}>{children || 'Cancel'}</Button>;
}
export const DeleteButton = ({className = '', children, ...otherProps}) => {
    return <Button {...otherProps} className={clsx(className, styles.deleteButton)}>{children || 'Delete'}</Button>;
}
