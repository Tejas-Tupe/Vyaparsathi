import { Product } from "../Database/db.js";

export const addStock = async (req, res) => {
  try {
    const userId = req.user; // comes from protect middleware
    const { name, category, quantity, price, lowStockThreshold } = req.body;

    // Basic validation
    if (!name || !category || quantity < 0 || price < 0) {
      return res.status(400).json({ error: "Invalid product data." });
    }

    const newProduct = await Product.create({
      name,
      category,
      quantity,
      price,
      lowStockThreshold,
      user: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    res.status(201).json({
      message: "Stock added successfully",
      product: newProduct
    });
  } catch (err) {
    console.error("Error adding stock:", err);
    res.status(500).json({ error: "Server error" });
  }
};
