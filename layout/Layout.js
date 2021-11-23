import styles from "./Layout.module.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Extra from "./Extra";
import { SIZES } from "../constants";
import useWindowSize from '../helper/useWindowSize';

function Layout({ children, ...props }) {
    const size = useWindowSize();
    let wide = size.width === undefined ? undefined : size.width >= SIZES.DESKTOP;

    return (
        <div className={styles.layout} {...props}>
            <Sidebar wide={wide}></Sidebar>
            <Main>{children}</Main>
            {size.width > SIZES.TABLET && <Extra></Extra>}
        </div>
    )
}

export default Layout;
