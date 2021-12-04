import { connectToDatabase } from "../../../lib/mongodb";

/**
 * @route   GET /api/user/:adress
 * @desc    returns user info
 * @access  Public
 */
 export default async function handler(req, res) {
    // switch acording to method
    switch (req.method) {
        case 'GET':
            return getUser(req, res);
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


export async function getUser(req, res) {
    try {
        const { adress } = req.query;
        // connect to db
        const { db } = await connectToDatabase();
        // find the user
        const userData = await db.collection("users")
            .findOne({ adress: adress });
        // return obj
        res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json(error);
    }
}


// export async function updateUser(req, res) {
//     try {
//         const { adress } = req.query;
//         // connect to db
//         const { db } = await connectToDatabase();
//         // find the user
//         const userData = await db.collection("users")
//             .findOneAndUpdate({ adress: adress }, );
//         // return obj
//         res.status(200).json(userData);
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// }