import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import TweetArea from "../components/TweetArea";
import { Loading } from "../components/Icons";
// import { useTweets } from "../helper/useFetcher";
// import { useRouter } from 'next/router';
// import { useEffect } from "react";

// home page, shows all tweets
function Home({ tweets }) {
    // const { data } = useTweets();
    // const router = useRouter();
    // useEffect(() => {
    //     router.replace(router.asPath);
    // }, [])

    return (
        <Layout>
            <MainHeader title="Home"></MainHeader>
            <TweetArea />
            {
                tweets ? tweets.map(twit => <Tweet key={twit._id} entry={twit}></Tweet>)
                    : <Loading />
            }
        </Layout>
    )
};

export default Home;


export async function getServerSideProps(context) {
    try {
        // get the current environment
        let { NODE_ENV, DEV_URL, PROD_URL, VERCEL_URL, VERCEL } = process.env;
        let SITEURL
        if (VERCEL) {
            SITEURL = VERCEL_URL;
        } else {
            SITEURL = NODE_ENV !== 'production' ? DEV_URL : PROD_URL;
        }

        // request posts from api
        let response = await fetch(`${SITEURL}/api/tweet`);
        const tweets = await response.json();

        return {
            props: { tweets: tweets },
        }
    } catch (e) {
        console.error(e)
        return {
            notFound: true
        }
    }
}
