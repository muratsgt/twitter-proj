import React from 'react';
import styles from "./Main.module.css";

function Main({ children, ...props}) {

    return (
        <div className={styles.main} {...props}>
            Main
            {children}
        </div>
    )
}

export default Main;
