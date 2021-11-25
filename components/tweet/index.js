import styles from "./style.module.css";
import Avatar from "../Avatar";
import Footer from "./Footer";
import Link from "next/link";
import { Header } from "./Header";
import { useRouter } from "next/router";

function Tweet({ entry, children }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${entry.useradress}/status/${entry._id}`)
    }

    return (
            <div onClick={handleClick} className={styles.container}>
                <div className={styles.avatar}>
                    <Link href={entry?.useradress} >
                        <a><Avatar src={entry?.userImage} /></a>
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
