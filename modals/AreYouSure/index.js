import { useRef } from "react";
import styles from "./style.module.css";
import { Modal } from 'react-responsive-modal';
import cn from "classnames";
import Button from "../../components/buttons/Button";

export function AreYouSure({title, message, setResult, className, ...props }) {

    const cancel = () => {
        props.onCloseModal();
    }

    const handleYes = () => {
        setResult(status => !status)
        props.onCloseModal();
    }

    return (
        <Modal
            classNames={{ modal: cn(styles.modcontain, className) }}
            open={props.open}
            onClose={props.onCloseModal}
            center
        >
            <h1>{title}</h1>
            <p>{message}</p>
            <Button full big onClick={handleYes} className={styles.yesbutton}>Unfollow</Button>
            <Button full big onClick={cancel} className={styles.buttons}>Cancel</Button>

        </Modal>);
}
