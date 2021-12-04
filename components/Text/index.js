import styles from "./style.module.css";
import cn from "classnames";

// text components, body, title and detail

export function TextBody({ bold = false, children, className, ...props }) {
    return (
        <p className={cn(styles.body, bold && styles.bold, className)} {...props}>
            {children}
        </p>
    )
};

export function AdressText({children, className, ...props }) {
    return (
        <p className={cn(styles.adress, className)} {...props}>
            {children}
        </p>
    )
};

export function TextTitle({ bold = false, children, ...props }) {
    return (
        <h2 className={cn(styles.titleText, bold && styles.bold)} {...props}>
            {children}
        </h2>
    )
};