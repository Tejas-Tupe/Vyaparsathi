import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { health, log_in, openaccount, users } from "./Routes/Routes.js";


let app = express();

const allowedOrigins = [
  'https://vyaparsathi-frontend.onrender.com',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/openaccount',openaccount);
app.use('/login',log_in);
app.use('/users',users);
app.use('/health',health);

app.listen(process.env.PORT,()=>{
    console.log(`Backend Server has started successfully on port ${process.env.PORT}`)
})

