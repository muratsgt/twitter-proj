import React from 'react';
import Button from "./Button";
import styles from "./ProfileButton.module.css";
import Avatar from './Avatar';
import TextBody from './TextBody';
import {Dots} from "../components/icons"
import cn from "classnames";

export default function ProfileButton({ name = "Name Surname", adress = "adress", children, ...props }) {
    return (
        <Button full className={cn(styles.box)} {...props}>
            <Avatar />
            <div className={styles.body}>
                <TextBody bold>{name}</TextBody>
                <TextBody className={styles.adres}>@{adress}</TextBody>
            </div>
            <Dots className={styles.dots}/>
            {children}
        </Button>
    )
};
