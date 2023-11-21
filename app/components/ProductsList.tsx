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
        products.map((p) => {
          const {
            _id,
            title,
            category,
            image,
            description,
            price,
            newProduct,
          } = p;
          return (
            <ProductCard
              key={p._id?.toString()}
              product={{
                _id,
                title,
                category,
                image,
                description,
                price,
                newProduct,
              }}
            />
          );
        })
      ) : (
        <h1 className="font-bold text-4xl italic">No Products to display!</h1>
      )}
    </div>
  );
}
