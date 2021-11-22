import styles from "./style.module.css";
import Avatar from "../profilebox/Avatar";
import Button from "../button/Button";
import Link from "next/link";
import * as Icon from "../icons";
import { formatDistanceToNowStrict } from 'date-fns';


function Tweet({ entry, children }) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <Link href={entry?.useradress} >
                    <a>
                        <Avatar></Avatar>
                    </a>
                </Link>

            </div>
            <div className={styles.body}>
                <header className={styles.header}>
                    <Link href={entry?.useradress} >
                        <a className={styles.name}>
                            {entry?.username}
                        </a>
                    </Link>
                    <span> @{entry?.useradress} </span>
                    <span>{"· "}{formatDistanceToNowStrict(entry?.time)}</span>
                </header>
                <div className={styles.content}>
                    {entry?.content}
                    {children}
                </div>
                <footer className={styles.footer}>
                    <div className={styles.iconBox}>
                        <Button className={styles.iconButton}>
                            <Icon.Reply />
                        </Button>
                        <span>{entry.replied}</span>
                    </div>
                    <div className={styles.iconBox}>
                        <Button className={styles.iconButton}>
                            <Icon.Retweet />
                        </Button>
                        <span>{entry.retweeted}</span>
                    </div>
                    <div className={styles.iconBox}>
                        <Button className={styles.iconButton}>
                            <Icon.Like />
                        </Button>
                        <span>{entry.liked}</span>
                    </div>
                    <div className={styles.iconBox}>
                        <Button className={styles.iconButton}>
                            <Icon.Share />
                        </Button>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Tweet
