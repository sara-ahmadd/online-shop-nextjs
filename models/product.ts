import mongoose, { model, models } from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  newProduct: {
    type: Boolean,
  },
  _id: {
    type: String,
  },
});
const Product = models.Product || model("Product", ProductSchema);
export default Product;
