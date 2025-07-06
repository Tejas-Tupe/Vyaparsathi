import { Order } from "../Database/db.js";

export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user;

    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 }).limit(5); // latest 5 orders

    res.status(200).json({ orders });
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};


export const getMydetailedOrders = async (req, res) => {
  try {
    const userId = req.user;

    const orders = await Order.find({ user: userId }); // All orders associated with given id.

    res.status(200).json({ orders });
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

export default {getMyOrders, getMydetailedOrders};