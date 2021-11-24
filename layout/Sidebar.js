import { useState } from 'react';
import styles from "./Sidebar.module.css";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/buttons/ThemeButton";
import ProfileButton from "../components/buttons/Profilebutton";
import { Tweet } from "../components/Icons";
import 'react-responsive-modal/styles.css';
import { TweetModal } from '../modals/TweetModal';


function Sidebar({ wide = true, children, ...props }) {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className={styles.sidebar} {...props}>
            <Navigation wide={wide}></Navigation>
            <ThemeButton onClick={onOpenModal} full={wide} className={styles.tweet}>
                {wide ? "Tweet" : <Tweet />}
            </ThemeButton>
            <ProfileButton wide={wide} className={styles.profile} ></ProfileButton>
            <TweetModal
                open={open}
                onCloseModal={onCloseModal}
            ></TweetModal>
            {children}
        </div>
    )
}

export default Sidebar;
