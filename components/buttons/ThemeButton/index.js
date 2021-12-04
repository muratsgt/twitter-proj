import styles from "./style.module.css";
import Button from "../Button";
import React from 'react';
import cn from "classnames";

// color themed button, like "tweet"
export default function ThemeButton({ children, className, ...props }) {
    return (
        <Button className={cn(styles.button, className)} {...props}>
            {children}
        </Button>
    )
};