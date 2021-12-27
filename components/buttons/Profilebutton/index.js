import styles from "./style.module.css";
import Button from "../Button";
import Avatar from '../../Avatar';
import { TextBody } from '../../Text';
import { Dots } from "../../Icons"
import cn from "classnames";
import { useRouter } from "next/router";

// TODO: add action, when clicked
// profile button at the left bottom of page
export default function ProfileButton({ wide = true, name, adress, children, className, ...props }) {
    const router = useRouter()
    const handleClick = () => {
        router.push('/' + adress);
    }
    return (
        <Button onClick={handleClick} full className={cn(styles.box, className)} {...props}>
            <Avatar src={props.src} size="profbutton" />
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
