import styles from "./TextTitle.module.css";
import cn from "classnames";

function TextTitle({ bold = true, children, ...props }) {
    return (
        <h2 className={cn(styles.titleText, bold && styles.boldText) } >
            {children}
        </h2>
    )
};

export default TextTitle;
