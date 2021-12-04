import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   POST /api/setfollow/follow?user=id&target=id
 * @desc    updates follow status
 * @access  Private
 */
export default async function setFollow(req, res) {
    try {
        const { user, target } = req.query;
        console.log(`user`, user)
        // connect to db
        const { db } = await connectToDatabase();
        // find the user
        const userData = await db.collection("users")
            .findOneAndUpdate({ adress: user }, {$addToSet: {follows: target}});
        // return obj
        res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json(error);
    }
}