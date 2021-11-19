import React from 'react';
import Button from "./Button";
import styles from "./ThemeButton.module.css";
import cn from "classnames";

export default function ThemeButton({ children, ...props }) {
    return (
        <Button className={cn(styles.button)} {...props}>
            {children}
        </Button>
    )
};
