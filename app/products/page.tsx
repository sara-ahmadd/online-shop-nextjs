import React from "react";
import ProductsList from "../components/ProductsList";
import { getAllProducts } from "@/lib/getAllProducts";
import { ProductType } from "@/types";
import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  await connectdb();
  const products: ProductType[] = await Product.find();

  const session = await getServerSession(OPTIONS);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/products");
  }
  return (
    <div className="page mx-auto flex items-center justify-between p-5">
      <ProductsList products={products} />
    </div>
  );
}
