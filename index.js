import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { log_in, openaccount, users } from "./Routes/Routes.js";

let app = express();

app.use(cors({
  origin: 'https://vyaparsathi-frontend.onrender.com/',
  credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/openaccount',openaccount);
app.use('/login',log_in);
app.use('/users',users);

app.listen(process.env.PORT,()=>{
    console.log(`Backend Server has started successfully on port ${process.env.PORT}`)
})

