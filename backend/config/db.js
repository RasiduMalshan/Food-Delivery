import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rasidumalshan:727438@cluster0.gffxl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}