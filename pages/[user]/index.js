import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import Tweet from "../../components/Tweet";
import MainHeader from "../../components/MainHeader";
import ProfileInfo from "../../components/ProfileInfo";

const TWEET = {
    username: "Murat Akca",
    useradress: "muratakca9",
    content: 'Sometimes, your biggest obstacle is getting started! Musical note: @bazzi Movie cameraTT: barblataupe',
    time: new Date("2021-10-16"),
    replied: 5,
    retweeted: 3,
    liked: 11,
}

const TWEET2 = {
    username: "Murat Akca",
    useradress: "muratakca9",
    content: '“The important thing is to never stop questioning [or learning].” – Albert Einstein',
    time: new Date("2021-10-16"),
    replied: 5,
    retweeted: 3,
    liked: 11,
}

const USER = {
    name: "Murat Akca",
    adress: "muratakca9",
    bannerUrl: "https://pbs.twimg.com/profile_banners/1282691206485610497/1605470153/1500x500",
    imageUrl: "https://pbs.twimg.com/profile_images/1328063163745579008/rVqZJRCd_400x400.jpg",
    bio: "Always wanna be a settler, but couldn't do it yet.",
    joined: new Date("2019-09-09"),
    location: "Deutschland",
    following: 376,
    followers: 25,
}

function Home() {

    const router = useRouter();
    const { user } = router.query;

    return (
        <Layout>
            <MainHeader back title={user} tweetNum={33}></MainHeader>
            <ProfileInfo user = {USER}></ProfileInfo>
            <Tweet entry={TWEET}></Tweet>
            <Tweet entry={TWEET2}></Tweet>
        </Layout>
    )
};

export default Home;