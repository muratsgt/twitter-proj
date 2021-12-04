import { useState, useContext } from 'react';
import styles from "./Sidebar.module.css";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/buttons/ThemeButton";
import ProfileButton from "../components/buttons/Profilebutton";
import { Tweet } from "../components/Icons";
import 'react-responsive-modal/styles.css';
import { TweetModal } from '../modals/TweetModal';
import { AuthContext } from '../store';
import { Loading } from '../components/Icons';

// navigation sidebar
function Sidebar({ wide = true, children, ...props }) {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);

    // controls for tweet entry modal button
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        currentUser ?
            <div className={styles.sidebar} {...props}>
                <Navigation wide={wide}></Navigation>
                <ThemeButton onClick={onOpenModal} full={wide} className={styles.tweet}>
                    {wide ? "Tweet" : <Tweet />}
                </ThemeButton>
                <ProfileButton
                    wide={wide}
                    className={styles.profile}
                    name={currentUser.name}
                    adress={currentUser.adress}
                    src={currentUser.imageUrl}
                ></ProfileButton>
                <TweetModal
                    open={open}
                    onCloseModal={onCloseModal}
                    currentUser={currentUser}
                ></TweetModal>
                {children}
            </div>
            : <Loading></Loading>
    )
}

export default Sidebar;
