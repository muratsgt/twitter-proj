import React from 'react';
import styles from "./Avatar.module.css";
import cn from "classnames";

function Avatar({
    src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    alt = "default_profile", width = "48px", ...props }) {
    return (
        <div className={cn(styles.avatar)} {...props}>
            <img className={styles.photo} src={src} alt={alt} />
        </div>
    )
};

export default Avatar;
