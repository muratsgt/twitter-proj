import React from 'react';
import styles from "./style.module.css";
import { Options } from "../Icons";
import { Topic } from './Topic';

const TRENDS = [
    {
        hashTag: "#softwaredevelopment",
        category: "Technology",
        tweets: 2078
    },
    {
        hashTag: "Ridley Scott",
        category: "Historical films",
        tweets: 19000
    },
    {
        hashTag: "#LateNightBerlin",
        category: "Germany",
        tweets: 13005
    },
    {
        hashTag: "#Avengers",
        category: "Film",
        tweets: 120000
    },
    {
        hashTag: "#GRAMMYs",
        category: "Technology",
        tweets: 950000
    },

]

function TrendsBox() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span>
                    Trends for you
                </span>
                <Options></Options>
            </header>
            {
                TRENDS.map((trend) => <Topic key={trend.hashTag} trend={trend}></Topic>)
            }

        </div>
    )
}

export default TrendsBox;
