import styles from "./TextBody.module.css";
import cn from "classnames";

function TextBody({ bold = false, children, ...props }) {
    return (
        <p className={cn(styles.body, bold && styles.bold) } >
            {children}
        </p>
    )
};

export default TextBody;
