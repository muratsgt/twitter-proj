import styles from "./Main.module.css";

// main div, middle of the page
function Main({ children, ...props}) {
    return (
        <div className={styles.main} {...props}>
            {children}
        </div>
    )
}

export default Main;
