import styles from "./style.module.css";
import Link from "next/link";
import { formatDistanceToNowStrict, toDate } from 'date-fns';

// header of the tweet, who sent it, etc.
export function Header(props) {
    let theDate = toDate(props.entry.time);
    return (
        <header className={styles.header}>
            <Link href={`/${props.entry?.useradress}`}>
                <a className={styles.name}>
                    {props.entry?.username}
                </a>
            </Link>
            <span> @{props.entry?.useradress} </span>
            <span>{"· "}{formatDistanceToNowStrict(theDate)}</span>
        </header>
    );
}
