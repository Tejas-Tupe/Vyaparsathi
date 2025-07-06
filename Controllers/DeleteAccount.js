import { User, Product, Order } from "../Database/db.js";

const deleteAccount = async (req, res) => {
  try {
    const userId = req.user;

    // 1. Delete orders
    await Order.deleteMany({ user: userId });

    // 2. Delete products
    await Product.deleteMany({ user: userId });

    // 3. Delete user account
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Account and all associated data deleted successfully." });
  } catch (err) {
    console.error("Account deletion failed:", err);
    res.status(500).json({ error: "Failed to delete account. Try again later." });
  }
};

export default deleteAccount;