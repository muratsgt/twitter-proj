export default function sortTweets (tweets) {
    return tweets.sort((first, second) => (second.time - first.time));
}