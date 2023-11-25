"use client";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import FilterCategories from "./FilterCategories";
import Searchbar from "./Searchbar";
import useGetSearchedProducts from "@/hooks/useGetSearchedProducts";

export default function ProductsList() {
  const { products, handleProducts, search, handleSearch } =
    useGetSearchedProducts();

  return (
    <div className="w-full flex flex-col justify-center gap-6 items-start px-20">
      <div className=" w-full flex flex-col justify-center items-start gap-4 p-4">
        <Searchbar search={search} handleSearch={handleSearch} />
        <FilterCategories handleProducts={handleProducts} />
      </div>
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
    </div>
  );
}
