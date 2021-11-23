import styles from "./style.module.css";
import cn from "classnames";

export default function Button({ children, className, full = false, big = false, ...props }) {
    return (
        <button
            type="button"
            className={cn(styles.button, full && styles.fullB, big && styles.bigB, className)}
            {...props}
        >
            {children}
        </button>
    )
};
