import React from 'react';
import styles from "./style.module.css";
import { Search } from "../Icons";
import cn from "classnames";

// search bar at the right top of the page
function SearchBar({ className, ...props }) {
    return (
        <div className={cn(styles.area, className)} {...props}>
            <div className={styles.container}>
                <Search />
                <input placeholder="Search Twitter" type="text" name="search" autoComplete="off"/>
            </div>
        </div>
    )
}

export default SearchBar;
