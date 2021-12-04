import styles from "./style.module.css";
import { Modal } from 'react-responsive-modal';
import cn from "classnames";
import Button from "../../components/buttons/Button";

// a reusable modal, for "are you sure" questions
export function AreYouSure({ title, message, setResult, className, children, ...props }) {
    // cancel button
    const cancel = () => {
        props.onCloseModal();
    }
    // runs the function in case of yes
    const handleYes = () => {
        setResult()
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
            <Button full big onClick={handleYes} className={styles.yesbutton}>{children}</Button>
            <Button full big onClick={cancel} className={styles.buttons}>Cancel</Button>
        </Modal>
    );
}
