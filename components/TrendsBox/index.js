import React from 'react';
import styles from "./style.module.css";
import { Options } from "../Icons";
import { Topic } from './Topic';
import {TRENDS} from "../../data";

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
