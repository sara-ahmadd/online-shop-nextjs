import React from "react";
import DashBoard from "./../components/DashBoard";
import { ProductType } from "@/types";
import { getProducts } from "@/lib/getAllProducts";
export default async function DashboardPage() {
  const data: Promise<ProductType[]> = await getProducts();
  const products: ProductType[] = await data;
  return (
    <div className="page">
      <DashBoard products={products} />
    </div>
  );
}
