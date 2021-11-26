import { USERS } from "../../../data"

export default function getUser(req, res) {
    try {
        const { adress } = req.query;
        const userData = USERS.find((i) => i.adress.toLowerCase() === adress.toLowerCase())
        res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json(error);
    }
}