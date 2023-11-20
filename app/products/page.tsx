import React from "react";
import ProductsList from "../components/ProductsList";
import getProducts from "@/lib/getAllProducts";
import { ProductType } from "@/types";
import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";

export default async function ProductsPage() {
  await connectdb();
  const products = await Product.find();
  return (
    <div className="page mx-auto flex items-center justify-between p-5">
      <ProductsList products={products} />
    </div>
  );
}
