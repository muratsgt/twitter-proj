import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * @route   GET /api/tweet/:id
 * @desc    returns tweet
 * @access  Public
 */
export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getTweet(req, res);
        case "POST":
            return postTweet(req, res);
        case "PUT":
            return editTweet(req, res);
        case "DELETE":
            return deleteTweet(req, res);
    }
}

export async function getTweet(req, res) {
    try {
        const { id } = req.query;
        //connect to db
        const { db } = await connectToDatabase();
        // fetch tweet
        const tweet = await db.collection("tweets")
            .findOne({ _id: ObjectId(id) });
        // return obj
        return res.status(200).json(tweet);
    } catch (error) {
        return res.status(500).json(error);
    }
}