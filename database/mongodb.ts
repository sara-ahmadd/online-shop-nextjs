import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
    }
    if (uri) {
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
