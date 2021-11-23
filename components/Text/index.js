import styles from "./style.module.css";
import cn from "classnames";

export function TextBody({ bold = false, children, className, ...props }) {
    return (
        <p className={cn(styles.body, bold && styles.bold, className)} {...props}>
            {children}
        </p>
    )
};

export function TextTitle({ bold = false, children, ...props }) {
    return (
        <h2 className={cn(styles.titleText, bold && styles.boldText)} {...props}>
            {children}
        </h2>
    )
};