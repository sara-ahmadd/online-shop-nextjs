import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  cart: {
    type: Array,
  },
  role: {
    type: String,
    default: "user",
  },
});

// Check if the 'User' model already exists, if not, create it
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
