import React from 'react';
import styles from "./style.module.css";
import numFormatter from '../../helper/numFormatter';

// trend elements in a trend box
export function Topic(props) {
    return (
    <div className={styles.topic}>
        <h2>Trending · {props.trend.category}</h2>
        <main>{props.trend.hashTag}</main>
        <footer>{numFormatter(props.trend.tweets)} Tweets</footer>
    </div>);
}
