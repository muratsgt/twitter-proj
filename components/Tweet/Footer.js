import styles from "./style.module.css";
import Button from "../buttons/Button";
import * as Icon from "../Icons";
import numFormatter from '../../helper/numFormatter';

const Footer = ({entry}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Reply />
                </Button>
                <span>  {numFormatter(entry.replied)}</span>
            </div>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Retweet />
                </Button>
                <span>  {numFormatter(entry.retweeted)}</span>
            </div>
            <div className={styles.iconBox}>
                <Button className={styles.iconButton}>
                    <Icon.Like />
                </Button>
                <span>  {numFormatter(entry.liked)}</span>
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
