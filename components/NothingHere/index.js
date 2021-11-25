import React from 'react';
import styles from "./style.module.css";

export function NothingHere({message, detail, ...props}) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className={styles.title}>{message}</h2>
                <h3 className={styles.detail}><br /> {detail}</h3>
            </div>
        </div>
    );
}
