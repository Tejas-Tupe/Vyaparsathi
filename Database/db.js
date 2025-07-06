import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function mongosh() {
    try {
        let MONGOURL = process.env.MongoURL
        await mongoose.connect(MONGOURL) 
    } catch (err) {
        console.log(err)
    }
}

mongosh();

// Schemas -->
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    default: ''
  },
  shopType: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  gstin: {
    type: String,
    default: ''
  },
  createdAt: {
  type:Date,
  default:Date.now
  }
});

const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status:{
    type:String,
    default: "Completed"
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  lowStockThreshold: {
    type: Number,
    default: 5
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

// Models -->

const Product = mongoose.model("Product", productSchema);

let User = mongoose.model('User', userSchema);

let Order = mongoose.model('Order', orderSchema);

// Exporting Models -->
export { User , Order, Product}