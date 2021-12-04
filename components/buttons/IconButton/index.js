import styles from "./style.module.css";
import cn from "classnames";

// icon type buttons
export default function IconButton({ children, className, ...props }) {
    return (
        <button
            className={cn(styles.button, className)}
            type="button"
            {...props}
        >
            {children}
        </button>
    )
};
