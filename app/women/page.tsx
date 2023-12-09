import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "../components/ProductCard";
import SpecificProducts from "../components/SpecificProducts";

export default async function WomenPage() {
  await connectdb();
  const products: ProductType[] = await Product.find({
    $or: [{ category: "women's clothing" }, { category: "jewelery" }],
  });

  return <SpecificProducts title="WOMEN" products={products} />;
}
