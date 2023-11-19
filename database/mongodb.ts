import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose
        .connect(process.env.MONGODB_URI as string)
        .then(() => console.log("Connected to db!"));
    } else {
      throw new Error("Add your MONGO_DB_URI!");
    }
  } catch (error) {
    throw new Error("Error occured on connecting to db");
  }
};
