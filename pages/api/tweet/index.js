import { TWEETS } from "../../../data"

/**
 * @route   GET /api/tweet?user=adress
 * @desc    returns tweets
 * @access  Public
 */
export default function getTweets(req, res) {
    try {
        // if query user=adress
        if (req.query.user) {
            const userTweets = TWEETS.filter((item) => item.useradress === req.query.user);
            return res.status(200).json(userTweets);
        }
        res.status(200).json(TWEETS);
    } catch (error) {
        return res.status(500).json(error);
    }
}