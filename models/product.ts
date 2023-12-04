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
  sale: {
    type: Number,
  },
});
const Product = models.Product || model("Product", ProductSchema);
export default Product;
