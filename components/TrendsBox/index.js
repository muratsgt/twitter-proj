import React from 'react';
import styles from "./style.module.css";
import { Options } from "../Icons";
import { Topic } from './Topic';

function TrendsBox({ trends, ...props }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span>
                    Trends for you
                </span>
                <Options></Options>
            </header>
            {
                trends.map((trend) => <Topic key={trend.hashTag} trend={trend}></Topic>)
            }

        </div>
    )
}

export default TrendsBox;
