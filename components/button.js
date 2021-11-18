import React from 'react'
import styles from "./button.module.css";

export default function Button({children}) {
    return (
        <button className={styles.button} type="button">
            {children}
        </button>
    )
}
