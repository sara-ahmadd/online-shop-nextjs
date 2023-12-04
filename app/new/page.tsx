import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "../components/ProductCard";
import SpecificProducts from "../components/SpecificProducts";

export default async function NewPage() {
  await connectdb();
  const products: ProductType[] = await Product.find({
    newProduct: true,
  });

  return <SpecificProducts title="NEW COLLECTION" products={products} />;
}
