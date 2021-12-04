import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   /api/user/
 * @desc    returns all users info
 * @access  Public
 */
export default async function handler(req, res) {
    // switch acording to method
    switch (req.method) {
        case 'GET':
            return getUsers(req, res);
        case 'POST':
            return addUser(req, res);
        case 'PUT':
            return updateUser(req, res);
        case 'DELETE':
            return deleteUser(req, res);
        default:
            break;
    }
}

export async function getUsers(req, res) {
    try {
        // connect to DB
        const { db } = await connectToDatabase();
        // fetch the users
        const userList = await db.collection("users")
            .find({})
            .sort({ followers: 1 })
            .toArray();
        return res.status(200).json(userList);
    } catch (error) {
        return res.status(500).json(error);
    }
}