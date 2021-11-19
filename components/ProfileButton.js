import React from 'react';
import Button from "./Button";
import styles from "./ProfileButton.module.css";
import Avatar from './Avatar';
import TextBody from './TextBody';
import {Dots} from "../components/icons"
import cn from "classnames";

export default function ProfileButton({ name = "Name Surname", adress = "adress", children, ...props }) {
    return (
        <Button className={cn(styles.box)} {...props}>
            <Avatar />
            <div className={styles.body}>
                <TextBody bold>{name}</TextBody>
                <TextBody>@{adress}</TextBody>
            </div>
            <Dots className={styles.arrow}/>
            {children}
        </Button>
    )
};
