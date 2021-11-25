import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import Tweet from "../../components/Tweet";
import MainHeader from "../../components/MainHeader";
import ProfileInfo from "../../components/ProfileInfo";
import { USERS } from "../../data";
import { TWEETS } from "../../data";
import { Loading } from "../../components/Icons";
import sortTweets from "../../helper/sortTweets";

function Userpage() {
    const [profile, setProfile] = useState({});
    const [userTweets, setUserTweets] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const { user } = router.query;
        const temp = USERS.find((i) => i.adress === user);
        setProfile(temp);
        const tempTweets = TWEETS.filter((item) => item.useradress === user);
        setUserTweets(tempTweets);
        return () => {
            setProfile(null);
            setUserTweets(null);
        }
    }, [router.query])

    return (
        <Layout>
            <MainHeader back title={profile?.adress} tweetNum={33}></MainHeader>
            {
                profile ? <ProfileInfo user={profile}></ProfileInfo>
                    : <Loading />
            }
            {
                sortTweets(userTweets)?.map((entry) => <Tweet key={entry._id} entry={entry}></Tweet>)
            }
        </Layout>
    )
};

export default Userpage;