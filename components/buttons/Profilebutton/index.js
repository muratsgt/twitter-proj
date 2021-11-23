import styles from "./style.module.css";
import Button from "../Button";
import Avatar from '../../Avatar';
import { TextBody } from '../../Text';
import { Dots } from "../../Icons"
import cn from "classnames";

export default function ProfileButton({ wide = true, name = "Name Surname", adress = "adress", children, className, ...props }) {
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
