import { useRef } from "react";
import styles from "./style.module.css";
import ThemeButton from "../../components/buttons/ThemeButton";
import { Modal } from 'react-responsive-modal';
import Avatar from '../../components/Avatar';
import IconButton from '../../components/buttons/IconButton';
import * as Icon from "../../components/Icons";
import cn from "classnames";


export function TweetWriter(className, ...props) {
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    return (
        <div className={cn(styles.modalcontainer, className)}>
            <Avatar></Avatar>
            <div className={styles.modalbody}>
                <div>
                    <textarea
                        placeholder="What's happening?"
                        className={styles.inputBox}
                        type="text" />
                    <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{
                        display: 'none'
                    }} />
                </div>
                <div className={styles.modalbuttons}>
                    <IconButton onClick={handleClick}><Icon.Media></Icon.Media></IconButton>
                    <IconButton><Icon.Gif></Icon.Gif></IconButton>
                    <IconButton><Icon.Emoji></Icon.Emoji></IconButton>
                    <ThemeButton className={styles.tweetbutton}>Tweet</ThemeButton>
                </div>
            </div>
        </div>
    );
}


export function TweetModal({ className, ...props }) {

    return (
        <Modal
            classNames={{ modal: cn(styles.modal, className) }}
            open={props.open}
            onClose={props.onCloseModal}
            center
        >
            <TweetWriter home={false} />
        </Modal>);
}
