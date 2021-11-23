import styles from "./Sidebar.module.css";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/buttons/ThemeButton";
import ProfileButton from "../components/buttons/Profilebutton";
import { Tweet } from "../components/Icons";

function Sidebar({ wide = true, children, ...props }) {
    return (
        <div className={styles.sidebar} {...props}>
            <Navigation wide={wide}></Navigation>
            <ThemeButton wide={wide} full={wide} className={styles.tweet}>
                {wide ? "Tweet" : <Tweet />}
            </ThemeButton>
            <ProfileButton wide={wide} className={styles.profile} ></ProfileButton>
            {children}
        </div>
    )
}

export default Sidebar;
