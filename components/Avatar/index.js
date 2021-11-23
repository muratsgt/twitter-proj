import styles from "./style.module.css";
import cn from "classnames";

function Avatar({
    src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    alt = "default_profile", ...props }) {
    return (
        <div className={cn(styles.avatar)} {...props}>
            <img className={styles.photo} src={src} alt={alt} />
        </div>
    )
};

export default Avatar;
