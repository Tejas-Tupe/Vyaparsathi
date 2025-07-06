import { Product } from "../Database/db.js";

const getMyProducts = async (req, res) => {
  try {
    const userId = req.user;
    const products = await Product.find({ user: userId });
    res.status(200).json({ products });
  } catch (err) {
    console.error("Fetch products error:", err);
    res.status(500).json({ error: "Server error while fetching products." });
  }
};

export default getMyProducts;
