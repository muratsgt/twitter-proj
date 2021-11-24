import React from 'react';
import styles from "./style.module.css";
import { Options } from "../Icons";
import { Who } from './Who';

const USERS = [
    {
        name: "Bill Gates",
        adress: "BillGates",
        imageUrl: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
        followed: true,
    },
    {
        name: "World of Engineering",
        adress: "engineers_feed",
        imageUrl: "https://pbs.twimg.com/profile_images/1267117170858885120/Tmh6Jdmi_400x400.jpg",
        followed: true,
    },
    {
        name: "Banana for scale",
        adress: "scale_banana",
        imageUrl: "https://pbs.twimg.com/profile_images/1298973941701193731/Gtn_w5Ls_400x400.jpg",
        followed: false,
    }
]

function FollowBox({ className, children, ...props }) {

    return (
        <div className={styles.container} {...props}>
            <header className={styles.header}>
                <span>
                    Who to follow
                </span>
            </header>
            {
                USERS.map((user) => <Who key={user.adress} user={user}></Who>)
            }
            {children}
        </div>
    )
}

export default FollowBox;
