import { Order } from '../Database/db.js';
import { Product } from '../Database/db.js';

const createOrder = async (req, res) => {
  try {
    const userId = req.user;
    const { productId, productName, quantity, price, total } = req.body;

    if (!productId || !quantity || !price || !total) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Fetch product from DB
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Check stock availability
    if (product.quantity < quantity) {
      return res.status(400).json({ error: `Out of Stock` });
    }

    // Deduct stock
    product.quantity -= quantity;
    product.updatedAt = new Date();
    await product.save();

    // Create Order
    const order = await Order.create({
      productId,
      productName,
      quantity,
      price,
      total,
      user: userId,
      createdAt: new Date()
    });

    res.status(201).json({ message: 'Order placed successfully.', order });
  } catch (err) {
    console.error("Order create error:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

export default createOrder;