import mongoose from "mongoose";

export const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to db successfully");
    }catch(err){
        console("Something went wrong:",err);
    }
}