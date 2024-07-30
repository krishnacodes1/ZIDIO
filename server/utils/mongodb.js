import mongoose from "mongoose";

export function connectToDB(){
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=> console.log("Connected to database successfully"))
        .catch((err) => console.log("Error connecting to database"));
}