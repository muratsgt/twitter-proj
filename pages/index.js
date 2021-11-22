import Layout from "../components/layout/Layout";
import Tweet from "../components/tweet";

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

function Home() {
    return (
        <Layout>
            <Tweet entry={TWEET}></Tweet>
            <Tweet entry={TWEET2}></Tweet>
        </Layout>
    )
};

export default Home;