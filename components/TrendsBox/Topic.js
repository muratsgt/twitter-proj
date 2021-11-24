import React from 'react';
import styles from "./style.module.css";

export function Topic(props) {
    return (
    <div className={styles.topic}>
        <h2>Trending · {props.trend.category}</h2>
        <main>{props.trend.hashTag}</main>
        <footer>{props.trend.tweets} Tweets</footer>
    </div>);
}
