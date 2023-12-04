import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "../components/ProductCard";
import SpecificProducts from "../components/SpecificProducts";

export default async function MenPage() {
  await connectdb();
  const products: ProductType[] = await Product.find({
    category: "men's clothing",
  });

  return <SpecificProducts title="MEN" products={products} />;
}
