import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import { connectToDB } from "./utils/mongodb.js";

const app = express();
app.use(cors());
app.use(express.json());
config();

try{
    connectToDB();
    app.listen(process.env.PORT, ()=>{
        console.log(`Server started on port:${process.env.PORT}`);
    })
}catch(err){
    console.log(err);
}
