import React from 'react';
import Button from "./Button.js";
import styles from "./NavButton.module.css";
import cn from "classnames";

export default function NavButton({ notify, selected, children, ...props }) {
    return (
        <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
            {children}
            {notify && <span className={styles.notify}>{notify}</span>}
        </Button>
    )
};
