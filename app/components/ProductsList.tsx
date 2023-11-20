import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5 items-stretch w-full">
      {products?.length > 0 ? (
        products.map((p) => <ProductCard key={p._id?.toString()} product={p} />)
      ) : (
        <h1 className="font-bold text-4xl italic">No Products to display!</h1>
      )}
    </div>
  );
}
