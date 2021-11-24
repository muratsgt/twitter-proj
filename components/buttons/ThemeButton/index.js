import styles from "./style.module.css";
import Button from "../Button";
import React from 'react';
import cn from "classnames";

export default function ThemeButton({ children, className, ...props }) {
    return (
        <Button className={cn(styles.button, className)} {...props}>
            {children}
        </Button>
    )
};