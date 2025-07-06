import { Product } from "../Database/db.js";

const getProductStats = async (req, res) => {
  try {
    const userId = req.user;

    const totalProducts = await Product.countDocuments({ user: userId });

    
   const lowStock = await Product.countDocuments({
  user: userId,
  $expr: {
    $lt: [
      { $ifNull: ["$quantity", 0] },
      { $ifNull: ["$lowStockThreshold", 5] }
    ]
  }
});

    // Fixing for dynamic threshold
    const products = await Product.find({ user: userId });
    const realLowStock = products.filter(
      (p) => p.quantity <= p.lowStockThreshold
    ).length;

    const outOfStock = await Product.countDocuments({
      user: userId,
      quantity: 0
    });

    const categories = await Product.distinct("category", { user: userId });

    res.status(200).json({
      totalProducts,
      lowStock: realLowStock,
      outOfStock,
      categories: categories.length,
    });
  } catch (err) {
    console.error("Product stats fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export default getProductStats;
