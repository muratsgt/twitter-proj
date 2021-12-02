import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import IconButton from '../buttons/IconButton';
import FollowButton from '../buttons/FollowButton';
import * as Icon from "../Icons";
import { TextTitle, TextBody, AdressText } from '../Text';
import Link from 'next/link';
import { format } from "date-fns";
import numFormatter from '../../helper/numFormatter';

const options = { weekday: "long", year: 'numeric', month: 'long', day: "no" };

function ProfileInfo({ user, children, ...props }) {
    return (
        <div className={styles.container}>
            <div className={styles.bannerPicture} >
                <Image src={user.bannerUrl} alt="banner" height={200} width={600} />
            </div>
            <div className={styles.profilePicture} >
                <img src={user.imageUrl} alt="profileimage" width="100%" height="100%" />
            </div>
            <div className={styles.body}>
                <div className={styles.actions}>
                    <IconButton><Icon.Dots></Icon.Dots></IconButton>
                    <IconButton><Icon.Messages></Icon.Messages></IconButton>
                    <FollowButton target={user?.adress}></FollowButton>
                </div>
                <div className={styles.info}>
                    <TextTitle bold>{user.name}</TextTitle>
                    <AdressText>@{user.adress}</AdressText>
                    <TextBody className={styles.bio}>{user.bio}</TextBody>
                    <TextBody className={styles.date}>
                        {
                            user.location ? (
                                <span>
                                    <Icon.Messages /> {user.location}
                                </span>) : null
                        }
                        <span>
                            <Icon.Messages /> Joined {format(Date.parse(user.joined), "MMMM yyyy")}
                        </span>
                    </TextBody>
                </div>
                <div className={styles.links}>
                    <Link href={user.adress + "/following"}><a><span>{numFormatter(user.following)}</span> Following</a></Link>
                    <Link href={user.adress + "/followers"}><a><span>{numFormatter(user.followers)}</span> Followers</a></Link>
                </div>
            </div>

            {children}
        </div>
    )
}

export default ProfileInfo
