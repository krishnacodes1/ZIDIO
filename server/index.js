import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import { connectToDB } from "./utils/db.js";
import authRoutes from './routes/auth.js'
const app = express();
app.use(cors());
app.use(express.json());
config();

app.use('/api/auth', authRoutes);

connectToDB();
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port:${process.env.PORT}`);
})
