import React from 'react';
import Button from "./Button";
import styles from "./ThemeButton.module.css";
import cn from "classnames";

export function ThemeButton({ children, className, ...props }) {
    return (
        <Button className={cn(styles.button, className)} {...props}>
            {children}
        </Button>
    )
};

export default React.memo(ThemeButton);
