import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   GET /api/tweet?user=adress
 * @desc    returns all tweets or tweets from a user
 * @access  Public
 */
 export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getTweets(req, res);
        case "POST":
            return postTweet(req, res);
        case "PUT":
            return editTweet(req, res);
        case "DELETE":
            return deleteTweet(req, res);
    }
}

async function getTweets(req, res) {
    try {
        //connect to db
        const { db } = await connectToDatabase();
        let tweets
        if (req.query?.user) {
            tweets = await db.collection("tweets")
                .find({ useradress: req.query.user })
                .sort({ time: -1 })
                .toArray();
        } else {
            // fetch the tweets
            tweets = await db.collection("tweets")
                .find({})
                .sort({ time: -1 })
                .toArray();
        }
        return res.status(200).json(tweets);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function postTweet(req, res) {
    try {
        //connect to db
        const { db } = await connectToDatabase();
        // fetch tweet
        console.log(`req.body`, req.body)
        let tweet = await db.collection("tweets")
            .insertOne(JSON.parse(req.body));
        // return obj
        console.log(`tweet`, tweet)
        return res.status(200).json(tweet);
    } catch (error) {
        return res.status(500).json(error);
    }
}