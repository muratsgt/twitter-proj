import React from 'react';
import styles from "./style.module.css";
import { Search } from "../Icons";
import cn from "classnames";

function SearchBar({ className, ...props }) {
    return (
        <div className={cn(styles.area, className)} {...props}>
            <div className={styles.container}>
                <Search />
                <input placeholder="Search Twitter" type="text" name="search" />
            </div>
        </div>
    )
}

export default SearchBar;
