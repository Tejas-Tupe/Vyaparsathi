import { User } from "../Database/db.js";

export default async function UserData(req,res) {
    let user = await User.findById(req.user);
    res.status(200).json({ success: true, user });
}