import { USERS } from "../../../data"

export default function getUsers(req, res) {
    try {
        res.status(200).json(USERS);
    } catch (error) {
        return res.status(500).json(error);
    }
}