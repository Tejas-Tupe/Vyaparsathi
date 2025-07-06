import { User } from "../Database/db.js";
import bcrypt from "bcryptjs";

const changePassword = async (req, res) => {
  try {
    const userId = req.user; // from protect middleware
    const { oldPassword, newPassword } = req.body;


    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: "New password must be at least 6 characters." });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found." });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Old password is incorrect." });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully." });
  } catch (err) {
    console.error("Change Password Error:", err);
    res.status(500).json({ error: "Server error while changing password." });
  }
};

export default changePassword;
