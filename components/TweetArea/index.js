import { useRef } from "react";
import styles from "./style.module.css";
import ThemeButton from "../buttons/ThemeButton";
import Avatar from '../Avatar';
import IconButton from '../buttons/IconButton';
import * as Icon from "../Icons";
import { CurrentUser } from "../../data";


export default function TweetArea(...props) {
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    return (
        <div className={styles.modalcontainer}>
            <Avatar src={CurrentUser.imageUrl}></Avatar>
            <div className={styles.modalbody}>
                <textarea
                    maxLength={140}
                    placeholder="What's happening?"
                    className={styles.inputBox}
                    type="text" />
                <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{
                    display: 'none'
                }} />
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