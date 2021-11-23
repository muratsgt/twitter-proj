import styles from "./Main.module.css";

function Main({ children, ...props}) {

    return (
        <div className={styles.main} {...props}>
            {children}
        </div>
    )
}

export default Main;
