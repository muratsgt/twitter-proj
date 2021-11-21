import styles from "./TextBody.module.css";
import cn from "classnames";

function TextBody({ bold = false, children, className, ...props }) {
    return (
        <p className={cn(styles.body, bold && styles.bold, className) } >
            {children}
        </p>
    )
};

export default TextBody;
