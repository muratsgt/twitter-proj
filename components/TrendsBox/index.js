import React from 'react';
import styles from "./style.module.css";
import { Topic } from './Topic';

// trends box, to show current trends
function TrendsBox({ trends, ...props }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span>
                    Trends for you
                </span>
            </header>
            {
                trends.map((trend) => <Topic key={trend.hashTag} trend={trend}></Topic>)
            }
        </div>
    )
}

export default TrendsBox;
