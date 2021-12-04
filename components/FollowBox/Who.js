import React from 'react';
import styles from "./style.module.css";
import FollowButton from '../buttons/FollowButton';
import Avatar from '../Avatar';
import { TextBody } from '../Text';
import cn from "classnames";
import { useRouter } from 'next/router';
import TooltipProfile from "../TooltipProfile";

// a user element, to show in who to follow box
export function Who({ user, children, className, ...props }) {
    const router = useRouter();
    const handleClick = () => router.push(`/${user.adress}`);

    return (
        <div className={cn(styles.box, className)} {...props}>
            <TooltipProfile
                className={styles.tooltip}
                user={user}
            ></TooltipProfile>
            <div className={styles.clickablebox} onClick={handleClick}>
                <Avatar src={user.imageUrl} size="tweet" />
                <div className={styles.body}>
                    <TextBody bold>{user.name}</TextBody>
                    <TextBody className={styles.adres}>@{user.adress}</TextBody>
                </div>
            </div>
            <FollowButton target={user?.adress} className={styles.followButton}></FollowButton>
            {children}
        </div>

    );
}
