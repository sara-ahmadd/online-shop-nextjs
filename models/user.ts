import mongoose, { model, models } from "mongoose";

const UserSchema = mongoose.Schema;

const UserModel = new UserSchema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
  },
});
const User = models.User || model("User", UserModel);
export default User;
