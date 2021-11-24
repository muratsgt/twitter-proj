import styles from "./style.module.css";
import Link from "next/link";
import { formatDistanceToNowStrict } from 'date-fns';

export function Header(props) {
    return (
        <header className={styles.header}>
            <Link href={props.entry?.useradress}>
                <a className={styles.name}>
                    {props.entry?.username}
                </a>
            </Link>
            <span> @{props.entry?.useradress} </span>
            <span>{"· "}{formatDistanceToNowStrict(props.entry?.time)}</span>
        </header>
    );
}
