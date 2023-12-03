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
});
const User = models.User || model("User", UserModel);
export default User;
