import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI,{ 
            dbName: "CAFE" 
    }).then(() => {
        console.log("MongoDB connected successfully");      
    }).catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error);
    }); 
    };