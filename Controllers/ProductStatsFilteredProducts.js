import {Product} from '../Database/db.js'

const getFilteredProducts = async (req, res) => {
  try {
    const userId = req.user; // from protect middleware
    const { type } = req.query;

    let query = { user: userId };

      if (type === 'categories') {
          const categories = await Product.distinct('category', { user: req.user });
          return res.status(200).json({ categories });
      }

    switch (type) {
      case 'low':
        query.$expr = { $lte: ['$quantity', '$lowStockThreshold'] };
        break;
      case 'out':
        query.quantity = 0;
        break;
      case 'total':
        // no extra filter needed — just fetch all for the user
        break;
      case 'categories':
        // You can return all with grouping on frontend
        break;
      default:
        return res.status(400).json({ error: 'Invalid filter type' });
    }

    const products = await Product.find(query).sort({ createdAt: -1 });

    res.status(200).json({ products });
  } catch (err) {
    console.error('Filtered product fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch filtered products' });
  }
};


export default getFilteredProducts;
