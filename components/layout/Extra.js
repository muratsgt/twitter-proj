import styles from "./Extra.module.css";

function Extra({ children, ...props}) {

    return (
        <div className={styles.extra} {...props}>
            Extra
            {children}
        </div>
    )
}

export default Extra;
