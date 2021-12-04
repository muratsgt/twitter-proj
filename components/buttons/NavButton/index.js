import styles from "./style.module.css";
import Button from "../Button";
import React from 'react';
import cn from "classnames";

// buttons for the navigation
export default function NavButton({ notify, selected, children, ...props }) {
    // adds class when selected
    return (
        <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
            {children}
            {notify && <span className={styles.notify}>{notify}</span>}
        </Button>
    )
};