import React from "react";
import ProductsList from "../components/ProductsList";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";

export default async function ProductsPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/products");
  }
  return (
    <div className="page mx-auto flex flex-col items-center gap-5 relative">
      <div className="fixed top-0 left-24 w-full h-16 z-50">
        <Categories />
      </div>
      <div className="pt-16 flex flex-col items-center gap-5">
        <Searchbar />
        <ProductsList />
      </div>
    </div>
  );
}
