import { useState, useEffect, useContext } from 'react';
import styles from "./Sidebar.module.css";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/buttons/ThemeButton";
import ProfileButton from "../components/buttons/Profilebutton";
import { Tweet } from "../components/Icons";
import 'react-responsive-modal/styles.css';
import { TweetModal } from '../modals/TweetModal';
import { AuthContext } from '../store';
import { fetchData } from '../helper/useFetcher';
import { Loading } from '../components/Icons';

const myUser = "muratakca9";

function Sidebar({ wide = true, children, ...props }) {
    const [open, setOpen] = useState(false);
    const { currentUser, setUser } = useContext(AuthContext);

    useEffect(() => {
        fetchData(`/api/user/${myUser}`)
            .then((res) => setUser(res))
            .catch(err => console.log(`err`, err))
    }, [])

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
                ></TweetModal>
                {children}
            </div>
            : <Loading></Loading>
    )
}

export default Sidebar;
