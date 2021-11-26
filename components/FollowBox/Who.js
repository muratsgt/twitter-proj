import React from 'react';
import styles from "./style.module.css";
import Button from "../buttons/Button";
import FollowButton from '../buttons/FollowButton';
import Avatar from '../Avatar';
import { TextBody } from '../Text';
import cn from "classnames";
import { useRouter } from 'next/router';
import TooltipProfile from "../TooltipProfile";

export function Who({ user, children, className, ...props }) {
    const router = useRouter();
    const handleClick = () => router.push(user.adress);

    return (
        <div onClick={handleClick} className={cn(styles.box, className)} {...props}>
            <Avatar src={user.imageUrl} size="tweet" />
            <TooltipProfile
                className={styles.tooltip}
                user={user}
            ></TooltipProfile>
            <div className={styles.body}>
                <TextBody bold>{user.name}</TextBody>
                <TextBody className={styles.adres}>@{user.adress}</TextBody>
            </div>
            <FollowButton className={styles.followButton}>Follow</FollowButton>
            {children}
        </div>

    );
}
