import styles from "./style.module.css";
import cn from "classnames";

export default function FollowButton({ children, className, ...props }) {
    return (
        <button
            type="button"
            className={cn(styles.button, className)}
            {...props}
        >
            {children}
        </button>
    )
};
