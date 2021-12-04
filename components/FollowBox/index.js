import React from 'react';
import styles from "./style.module.css";
import { Who } from './Who';
import { useUsers } from '../../helper/useFetcher';

// who to follow box, at the right column
function FollowBox({ className, children, ...props }) {
    const { data } = useUsers();
    return (
        <div className={styles.container} {...props}>
            <header className={styles.header}>
                <span>
                    Who to follow
                </span>
            </header>
            {data && data.slice(1, 4).map((user) => <Who key={user.adress} user={user}></Who>)}
            {children}
        </div>
    )
}

export default FollowBox;
