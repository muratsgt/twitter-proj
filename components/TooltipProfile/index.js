import React from 'react';
import styles from "./style.module.css";
import FollowButton from '../buttons/FollowButton';
import { TextTitle, TextBody, AdressText } from '../Text';
import Link from 'next/link';
import numFormatter from '../../helper/numFormatter';
import Avatar from "../Avatar";
import cn from "classnames";

export default function TooltipProfile({ user, className, ...props }) {
    return (
        <div className={cn(styles.body, className)}>
            <div className={styles.actions}>
                <Link href={user?.adress} >
                    <a><Avatar src={user?.imageUrl} /></a>
                </Link>
                <FollowButton className={styles.buttontrans}>Follow</FollowButton>
            </div>
            <div className={styles.info}>
                <TextTitle bold>{user.name}</TextTitle>
                <AdressText>@{user.adress}</AdressText>
                <TextBody className={styles.bio}>{user.bio}</TextBody>
            </div>
            <div className={styles.links}>
                <Link href="/following"><a><span>{numFormatter(user.following)}</span> Following</a></Link>
                <Link href="/followers"><a><span>{numFormatter(user.followers)}</span> Followers</a></Link>
            </div>
        </div>
    );
}