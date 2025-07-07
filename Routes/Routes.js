import express from "express";
import { signup, login, updateProfile } from "../Controllers/AuthController.js";
import protect from "../Middlewares/Authentication.js";
import UserData from "../Controllers/DashboardData-Receiver.js";
import changePassword from "../Controllers/ChangePassword.js";
import { getMyOrders, getMydetailedOrders } from "../Controllers/OrderSummery.js";
import { addStock } from "../Controllers/AddStockController.js";
import getProductStats from "../Controllers/GetProductsStats.js";
import createOrder from "../Controllers/Orders.js";
import getMyProducts from "../Controllers/Getmyproducts.js";
import refillStock from "../Controllers/AddInExistingStock.js";
import deleteAccount from "../Controllers/DeleteAccount.js";
import getFilteredProducts from "../Controllers/ProductStatsFilteredProducts.js";
import Health from "../Controllers/health.js";
let openaccount = express.Router();
let log_in = express.Router();  
let users = express.Router();
let health = express.Router();
openaccount.post('/',signup);
log_in.post('/',login);
users.get('/dashboard',protect,UserData);
users.post('/editprofile',protect,updateProfile);
users.post('/changepassword',protect,changePassword);
users.post('/createorder',protect,createOrder);
users.get('/myorders',protect,getMyOrders);
users.get('/mydetailedorders',protect,getMydetailedOrders);
users.post('/addstock',protect,addStock);
users.get('/productstats',protect,getProductStats);
users.get('/products',protect,getMyProducts);
users.post('/refillstock',protect,refillStock);
users.delete('/deleteaccount',protect,deleteAccount);
users.get('/products/filter',protect,getFilteredProducts); // for product stats filter products.
health.get('/',Health);



export {openaccount, log_in, users, health};