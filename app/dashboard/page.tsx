import React from "react";
import DashBoard from "./components/DashBoard";
import { ProductType } from "@/types";
import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";
import Refresh from "../components/Refresh";
import { getFilteredProducts } from "@/lib/getFilteredProducts";
import Categories from "../components/Categories";
import Searchbar from "../components/Searchbar";
export default async function DashboardPage() {
  // const products: ProductType[] = await getFilteredProducts("");
  return (
    <div className="page mx-auto flex flex-col items-center gap-5 relative">
      <Refresh />
      <div className="fixed top-0 left-24 w-full h-16 z-50">
        <Categories />
      </div>
      <div className="pt-16 flex flex-col items-center gap-5 w-full">
        <Searchbar />
        <DashBoard />
      </div>
    </div>
  );
}
