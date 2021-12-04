import { useRef } from "react";
import styles from "./style.module.css";
import ThemeButton from "../../components/buttons/ThemeButton";
import { Modal } from 'react-responsive-modal';
import Avatar from '../../components/Avatar';
import IconButton from '../../components/buttons/IconButton';
import * as Icon from "../../components/Icons";
import cn from "classnames";
import { sendTweet } from "../../helper/sendTweet";
import { useRouter } from 'next/router';

// TODO: add file, picture upload funtions

// tweet writer component
export function TweetWriter({currentUser, className, ...props}) {
    const router = useRouter();
    // to hide file input div
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // handle uploaded file
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    // send tweet to server and close modal
    const handleTweet = async () => {
        const newEntry = document.getElementById("tweetEntryModal").value;
        sendTweet(currentUser, newEntry);
        props.onClose();
        router.replace(router.asPath);
    }

    return (
        <div className={cn(styles.modalcontainer, className)}>
            <Avatar src={currentUser?.imageUrl}></Avatar>
            <div className={styles.modalbody}>
                <div>
                    <textarea
                        placeholder="What's happening?"
                        className={styles.inputBox}
                        type="text"
                        id="tweetEntryModal"/>
                    <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{
                        display: 'none'
                    }} />
                </div>
                <div className={styles.modalbuttons}>
                    <IconButton onClick={handleClick}><Icon.Media></Icon.Media></IconButton>
                    <IconButton><Icon.Gif></Icon.Gif></IconButton>
                    <IconButton><Icon.Emoji></Icon.Emoji></IconButton>
                    <ThemeButton onClick={handleTweet} className={styles.tweetbutton}>Tweet</ThemeButton>
                </div>
            </div>
        </div>
    );
}

// tweet writer modal
export function TweetModal({ currentUser, className, ...props }) {
    return (
        <Modal
            classNames={{ modal: cn(styles.modal, className) }}
            open={props.open}
            onClose={props.onCloseModal}
            center
        >
            <TweetWriter onClose={props.onCloseModal} currentUser={currentUser} home={false} />
        </Modal>);
}
