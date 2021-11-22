import styles from "./ThemeButton.module.css";
import Button from "./Button";

import React from 'react';
import cn from "classnames";

export function ThemeButton({ children, className, ...props }) {
    return (
        <Button className={cn(styles.button, className)} {...props}>
            {children}
        </Button>
    )
};

export default React.memo(ThemeButton);
