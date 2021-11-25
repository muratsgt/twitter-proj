import React from 'react';
import styles from "./style.module.css";
import { Who } from './Who';
import { USERS } from "../../data";

function FollowBox({ className, children, ...props }) {

    return (
        <div className={styles.container} {...props}>
            <header className={styles.header}>
                <span>
                    Who to follow
                </span>
            </header>
            {
                USERS.slice(0,3).map((user) => <Who key={user.adress} user={user}></Who>)
            }
            {children}
        </div>
    )
}

export default FollowBox;
