import mongoose from "mongoose";
import { DB_URL } from "../config/env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};



export default connectDB;