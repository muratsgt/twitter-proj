import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import {TWEETS} from "../data";
import sortTweets from "../helper/sortTweets";
import TweetArea from "../components/TweetArea";

function Home() {
    return (
        <Layout>
            <MainHeader title="Home"></MainHeader>
            <TweetArea />
            {sortTweets(TWEETS).map(twit=><Tweet key={twit._id} entry={twit}></Tweet>)}
        </Layout>
    )
};

export default Home;