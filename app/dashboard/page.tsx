import React from "react";
import DashBoard from "./components/DashBoard";
import { ProductType } from "@/types";
import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";
import Refresh from "../components/Refresh";
import { getFilteredProducts } from "@/lib/products/getFilteredProducts";
import Categories from "../components/Categories";
import Searchbar from "../components/Searchbar";
export default async function DashboardPage() {
  return (
    <div className="page mx-auto flex flex-col items-center gap-5 relative">
      <Refresh />
      <div className="pt-16 flex flex-col items-center gap-5 w-full">
        <DashBoard />
      </div>
    </div>
  );
}
