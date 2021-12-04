import { useRef, useContext } from "react";
import styles from "./style.module.css";
import ThemeButton from "../buttons/ThemeButton";
import Avatar from '../Avatar';
import IconButton from '../buttons/IconButton';
import * as Icon from "../Icons";
import { AuthContext } from '../../store';
import { sendTweet } from "../../helper/sendTweet";
import { useRouter } from 'next/router';

// TODO: file and picture upload
// tweet area at the top of the home page
export default function TweetArea({ ...props }) {
    const { currentUser } = useContext(AuthContext);
    const router = useRouter();
    // for the file upload part
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    // send tweet action
    const handleTweet = async () => {
        const newEntry = document.getElementById("tweetEntryArea").value;
        sendTweet(currentUser, newEntry);
        // to refresh the tweets
        router.replace(router.asPath);
    }

    return (
        <div className={styles.modalcontainer}>
            <Avatar src={currentUser?.imageUrl}></Avatar>
            <div className={styles.modalbody}>
                <textarea
                    maxLength={280}
                    placeholder="What's happening?"
                    className={styles.inputBox}
                    type="text"
                    id="tweetEntryArea"
                />
                <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{
                    display: 'none'
                }} />
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