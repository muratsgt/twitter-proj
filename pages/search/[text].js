import Layout from "../../layout/Layout";
import MainHeader from "../../components/MainHeader";
import { useTweets } from "../../helper/useFetcher";
import { useState, useEffect } from "react";
import { Loading } from "../../components/Icons";
import Tweet from "../../components/Tweet";
import { useRouter } from "next/router";

// page for explore
function Search({ }) {
    const [tweets, setTweets] = useState([]);
    // fetch tweets from server
    const { data } = useTweets();
    // get search text
    const router = useRouter();
    const searchText = router.query.text?.toLowerCase();

    useEffect(() => {
        // filter tweets
        const filteredData = data?.filter(item => (
            (item.content + item.username).toLowerCase().includes(searchText)
        ));
        setTweets(filteredData);
    }, [searchText, data])

    return (
        <Layout>
            <MainHeader title="Search"></MainHeader>
            {
                tweets ? tweets.map(twit => <Tweet key={twit._id} entry={twit}></Tweet>)
                    : <Loading />
            }
        </Layout>
    )
};

export default Search;