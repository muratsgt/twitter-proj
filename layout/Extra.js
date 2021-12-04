import styles from "./Extra.module.css";
import SearchBar from "../components/SearchBar";
import TrendsBox from "../components/TrendsBox";
import FollowBox from "../components/FollowBox";
import cn from "classnames";
import { useTrends } from "../helper/useFetcher";

// right column on page
function Extra({ desktop = true, children, className, ...props }) {
    const { data } = useTrends();

    // shows component according to screen width
    return (
        desktop ? (<div className={cn(styles.extra, className)
        } {...props}>
            <SearchBar className={styles.search} ></SearchBar>
            {data && <TrendsBox trends={data.slice(0, 4)}></TrendsBox>}
            <FollowBox ></FollowBox>
            {children}
        </div >
        ) : null
    )
}

export default Extra;
