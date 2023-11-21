import mongoose, { model, models } from "mongoose";

const UserSchema = mongoose.Schema;

const UserModel = new UserSchema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
});
const User = models.User || model("User", UserModel);
export default User;
