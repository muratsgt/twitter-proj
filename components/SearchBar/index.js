import React, { useState } from 'react';
import styles from "./style.module.css";
import { Search } from "../Icons";
import cn from "classnames";
import { useRouter } from 'next/router';

// search bar at the right top of the page
function SearchBar({ className, ...props }) {
    const [mytext, setMytext] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setMytext(e.target.value);
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            router.push(`/search/${mytext}`);
        }
    }


    return (
        <div className={cn(styles.area, className)} {...props}>
            <div className={styles.container}>
                <Search />
                <input onKeyPress={handleSubmit} onChange={handleChange} placeholder="Search Twitter" value={mytext} type="search" autoComplete="off" />
            </div>
        </div>
    )
}

export default SearchBar;
