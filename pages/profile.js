import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import ProfileInfo from "../components/ProfileInfo";
import { CurrentUser } from "../data";
import { TWEETS } from "../data";
import { Loading } from "../components/Icons";
import sortTweets from "../helper/sortTweets";

function Profile() {
    const [userTweets, setUserTweets] = useState([]);

    useEffect(() => {
        const tempTweets = TWEETS.filter((item) => item.useradress === CurrentUser.adress);
        console.log(`tempTweets`, tempTweets)
        setUserTweets(tempTweets);
        return () => {
            setUserTweets(null);
        }
    }, [])

    return (
        <Layout>
            <MainHeader back title={CurrentUser?.adress} tweetNum={33}></MainHeader>
            {
                CurrentUser ? <ProfileInfo user={CurrentUser}></ProfileInfo>
                    : <Loading />
            }
            {
                sortTweets(userTweets)?.map((entry) => <Tweet key={entry._id} entry={entry}></Tweet>)
            }
        </Layout>
    )
};

export default Profile;