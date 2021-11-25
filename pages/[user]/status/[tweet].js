import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../layout/Layout";
import Tweet from "../../../components/Tweet";
import MainHeader from "../../../components/MainHeader";
import { TWEETS } from "../../../data";

function Userpage() {
    const [twit, setTwit] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const { tweet } = router.query;
        const tempTweet = TWEETS.find((item) => item._id === tweet);
        setTwit(tempTweet);
        return () => {
            setTwit(null);
        }
    }, [router.query])

    return (
        <Layout>
            <MainHeader back title="Tweet"></MainHeader>
            {twit ? <Tweet entry={twit}></Tweet> : null}
        </Layout>
    )
};

export default Userpage;