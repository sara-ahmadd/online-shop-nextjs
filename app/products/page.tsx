import React from "react";
import ProductsList from "../components/ProductsList";
import Link from "next/link";
import { getProducts } from "@/lib/getAllProducts";
import { ProductType } from "@/types";

export default async function ProductsPage() {
  const data: Promise<ProductType[]> = await getProducts();
  const products: ProductType[] = await data;
  return (
    <div className="page mx-auto flex items-center justify-between p-5">
      <ProductsList products={products} />
    </div>
  );
}
