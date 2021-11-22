import styles from "./ProfileButton.module.css";

import Button from "../button/Button";
import Avatar from './Avatar';
import TextBody from '../text/TextBody';
import { Dots } from "../icons"

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
