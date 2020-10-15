import styles from './Button.module.css';
import React from "react";

export const Button = ({classes = [], children, ...otherProps}) => {
    return <button {...otherProps} className={[...classes, styles.button].join(' ')}>{children}</button>;
}

export const CancelButton = ({classes = [], children, ...otherProps}) => {
    return <Button {...otherProps} classes={[...classes, styles.cancelButton]}>{children || 'Cancel'}</Button>;
}
export const DeleteButton = ({classes = [], children, ...otherProps}) => {
    return <Button {...otherProps} classes={[...classes, styles.deleteButton]}>{children || 'Delete'}</Button>;
}
