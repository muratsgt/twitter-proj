import styles from "./Layout.module.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Extra from "./Extra";
import { SIZES } from "../constants";
import useWindowSize from '../helper/useWindowSize';
import { Loading } from "../components/Icons";

function Layout({ children, ...props }) {
    const size = useWindowSize();
    let wide = size.width === undefined ? undefined : size.width >= SIZES.DESKTOP;
    let desktop = size.width === undefined ? undefined : size.width >= SIZES.TABLET;

    return (
        wide === undefined ? (<Loading></Loading>)
            : (<div className={styles.layout} {...props}>
                <Sidebar wide={wide}></Sidebar>
                <Main>{children}</Main>
                <Extra desktop={desktop} className={styles.extra}></Extra>
            </div>)
    )
}

export default Layout;
