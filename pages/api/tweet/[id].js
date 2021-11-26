import { TWEETS } from "../../../data"

/**
 * @route   GET /api/tweet/:id
 * @desc    returns tweet
 * @access  Public
 */
export default function getTweet(req, res) {
    try {
        const { id } = req.query;
        const tweetData = TWEETS.find((i) => i._id.toLowerCase() === id.toLowerCase())
        res.status(200).json(tweetData);
    } catch (error) {
        return res.status(500).json(error);
    }
}