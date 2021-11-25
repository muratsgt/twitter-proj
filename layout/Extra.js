import styles from "./Extra.module.css";
import SearchBar from "../components/SearchBar";
import TrendsBox from "../components/TrendsBox";
import FollowBox from "../components/FollowBox";
import cn from "classnames";
import {TRENDS} from "../data";

function Extra({ desktop = true, children, className, ...props }) {

    return (
        desktop ? (<div className={cn(styles.extra, className)
        } {...props}>
            <SearchBar className={styles.search} ></SearchBar>
            <TrendsBox trends={TRENDS}></TrendsBox>
            <FollowBox ></FollowBox>
            {children}
        </div >
        ) : null
    )
}

export default Extra;
