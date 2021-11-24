import Tweet from "../components/Tweet";

const TWEET = {
    username: "Murat Akca",
    useradress: "muratakca9",
    content: 'Sometimes, your biggest obstacle is getting started! Musical note: @bazzi Movie cameraTT: barblataupe',
    time: new Date("2021-10-16"),
    replied: 5,
    retweeted: 3,
    liked: 11,
}

export default {
    title: "Tweet",
    args: {
    }
};

export const TweetComponent = (args) => (<Tweet entry={TWEET} {...args}></Tweet>);