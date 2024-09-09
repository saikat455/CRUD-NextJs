import mongoose from "mongoose";

const connectMongoDB = ()=>{
    try{
        mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch (error){
        console.log(error);
    }
}

export default connectMongoDB;