import React from "react";
import DashBoard from "./components/DashBoard";
import { ProductType } from "@/types";
import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";
import Refresh from "../components/Refresh";
export default async function DashboardPage() {
  await connectdb();
  const products: ProductType[] = await Product.find();
  return (
    <div className="page">
      <Refresh />
      <DashBoard products={products} />
    </div>
  );
}
