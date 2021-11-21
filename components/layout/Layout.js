import React from 'react';
import styles from "./Layout.module.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Extra from "./Extra";
import useWindowSize from '../../helper/useWindowSize';
import CONST from "../../constants";

function Layout({ children, ...props }) {
    const size = useWindowSize();

    return (
        <div className={styles.layout} {...props}>
            <Sidebar></Sidebar>
            <Main></Main>
            {size.width > CONST.TABLET && <Extra></Extra>}
            {children}
        </div>
    )
}

export default Layout;
