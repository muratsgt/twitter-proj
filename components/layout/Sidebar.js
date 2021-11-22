import styles from "./Sidebar.module.css";

import Navigation from "../navigation/Navigation";
import ThemeButton from "../button/ThemeButton";
import ProfileButton from "../profilebox/ProfileButton";
import { Tweet } from "../icons";

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
