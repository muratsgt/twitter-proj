import styles from "./style.module.css";
import Avatar from "../Avatar";
import Footer from "./Footer";
import Link from "next/link";
import { Header } from "./Header";

function Tweet({ entry, children }) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <Link href={entry?.useradress} >
                    <a><Avatar /></a>
                </Link>
            </div>
            <div className={styles.body}>
                <Header entry={entry}></Header>
                <div className={styles.content}>
                    <div>
                        {entry?.content}
                    </div>
                    {entry?.imgContent &&
                        <div className={styles.imgContent}>
                            <img src={entry?.imgContent} alt="content" />
                        </div>
                    }
                    {children}
                </div>
                <Footer entry={entry}></Footer>
            </div>

        </div>
    )
}

export default Tweet
