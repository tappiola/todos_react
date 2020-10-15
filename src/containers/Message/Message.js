import React from "react";
import classes from './Message.module.css';

export const Message = ({children}) => <div className={classes.message}>{children}</div>;
