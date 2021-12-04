import styles from "./style.module.css";
import cn from "classnames";

// avatar component, sizes: tweet, profbutton, profile
function Avatar({
    src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    alt = "default_profile", size="tweet", ...props }) {
    return (
        <div className={cn(styles.avatar, styles[size])} {...props}>
            <img className={styles.photo} src={src} alt={alt} />
        </div>
    )
};

export default Avatar;
