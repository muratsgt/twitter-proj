import React from 'react';
import styles from "./Stack.module.css";
import cn from "classnames";

function Stack({column, children }) {
    return (
        <div className={cn(styles.stack, column && styles.col)}>
            {children}
        </div>
    )
}

export default Stack
