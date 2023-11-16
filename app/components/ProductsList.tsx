import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5 items-center w-full">
      {products?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
