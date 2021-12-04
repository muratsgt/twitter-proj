import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   POST /api/setfollow/unfollow?user=id&target=id
 * @desc    updates follow status
 * @access  Private
 */
 export default async function setUnFollow(req, res) {
    try {
        const { user, target } = req.query;
        // connect to db
        const { db } = await connectToDatabase();
        // find the user
        const userData = await db.collection("users")
            .findOneAndUpdate({ adress: user }, {$pull: {follows: target}});
        // return obj
        res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json(error);
    }
}