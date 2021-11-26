import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import sortTweets from "../helper/sortTweets";
import TweetArea from "../components/TweetArea";
import useFetcher from "../helper/useFetcher";
import { Loading } from "../components/Icons";
import { NothingHere } from "../components/NothingHere";

function Home() {
    const { data, isLoading, isError } = useFetcher('/api/tweet');

    return (
        <Layout>
            <MainHeader title="Home"></MainHeader>
            <TweetArea />
            {
                isError ? <NothingHere message="failed to load data" />
                    : (
                        isLoading ? <Loading></Loading>
                            : sortTweets(data).map(twit => <Tweet key={twit._id} entry={twit}></Tweet>)
                    )
            }
        </Layout>
    )
};

export default Home;