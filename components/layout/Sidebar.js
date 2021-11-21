import React from 'react';
import styles from "./Sidebar.module.css";
import Navigation from "../Navigation";
import ThemeButton from "../ThemeButton";
import ProfileButton from "../ProfileButton";

function Sidebar({ children, ...props}) {

    return (
        <div className={styles.sidebar} {...props}>
            <Navigation></Navigation>
            <ThemeButton full big>Tweet</ThemeButton>
            <ProfileButton></ProfileButton>
            {children}
        </div>
    )
}

export default Sidebar;
