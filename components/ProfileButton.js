import React from 'react';
import Button from "./Button";
import styles from "./ProfileButton.module.css";
import Avatar from './Avatar';
import TextBody from './TextBody';
import { Dots } from "../components/icons"
import cn from "classnames";

export default function ProfileButton({ wide=true, name = "Name Surname", adress = "adress", children, className, ...props }) {
    return (
        <Button full className={cn(styles.box, className)} {...props}>
            <Avatar />
            {wide && <>
                <div className={styles.body}>
                    <TextBody bold>{name}</TextBody>
                    <TextBody className={styles.adres}>@{adress}</TextBody>
                </div>
                <Dots className={styles.dots} />
                {children}
            </>
            }
        </Button>
    )
};
