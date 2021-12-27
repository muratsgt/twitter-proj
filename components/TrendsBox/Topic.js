import React from 'react';
import styles from "./style.module.css";
import numFormatter from '../../helper/numFormatter';
import { useRouter } from 'next/router';

// trend elements in a trend box
export function Topic({ trend }) {
    const router = useRouter();
    const handleClick = () => {
        const word = trend.hashTag[0] == "#" ? trend.hashTag.slice(1) : trend.hashTag
        router.push(`/search/${word}`)
    }
    return (
        <div onClick={handleClick} className={styles.topic}>
            <h2>Trending · {trend.category}</h2>
            <main>{trend.hashTag}</main>
            <footer>{numFormatter(trend.tweets)} Tweets</footer>
        </div>);
}
