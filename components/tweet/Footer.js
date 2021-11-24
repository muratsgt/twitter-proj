import styles from "./style.module.css";
import Button from "../buttons/Button";
import * as Icon from "../Icons";

const Footer = ({entry}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Reply />
                </Button>
                <span>  {entry.replied}</span>
            </div>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Retweet />
                </Button>
                <span>  {entry.retweeted}</span>
            </div>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Like />
                </Button>
                <span>  {entry.liked}</span>
            </div>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Share />
                </Button>
            </div>
        </footer>
    )
};

export default Footer;
