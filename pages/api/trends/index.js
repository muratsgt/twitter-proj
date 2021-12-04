import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   GET /api/trends
 * @desc    returns all trends
 * @access  Public
 */
export default async function getTrends(req, res) {
    try {
        // connect to db
        const { db } = await connectToDatabase();
        // fetch trends
        let trends = await db.collection("trends")
            .find({})
            .toArray();
        return res.status(200).json(trends);
    } catch (error) {
        return res.status(500).json(error);
    }
}