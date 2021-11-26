import Tweet from "../components/Tweet";
import { TWEETS } from "../data";

export default {
    title: "Tweet",
    args: {
    }
};

export const TextTweet = (args) => (<Tweet entry={TWEETS[0]} {...args}></Tweet>);

export const ImageTweet = (args) => (<Tweet entry={TWEETS[1]} {...args}></Tweet>);