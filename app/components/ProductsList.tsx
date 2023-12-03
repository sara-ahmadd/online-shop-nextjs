"use client";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import FilterCategories from "./FilterCategories";
import Searchbar from "./Searchbar";
import useGetSearchedProducts from "@/hooks/useGetSearchedProducts";
import SpecialHeading from "./SpecialHeading";

export default function ProductsList({
  text_1,
  text_2,
}: {
  text_1: string;
  text_2: string;
}) {
  const { products, handleProducts, search, handleSearch } =
    useGetSearchedProducts();

  return (
    <div className="w-full flex flex-col justify-center gap-4 items-start lg:px-2">
      <SpecialHeading text_1={text_1} text_2={text_2} />
      <div className=" w-full flex flex-col justify-center items-start gap-4 p-4">
        <Searchbar search={search} handleSearch={handleSearch} />
        <FilterCategories handleProducts={handleProducts} />
      </div>

      <div className="flex justify-start flex-wrap  pl-3 gap-2 items-center w-full h-full ">
        {products?.length > 0 ? (
          products.map((p) => {
            const { title, category, image, description, price, newProduct } =
              p;
            return (
              <ProductCard
                key={p._id?.toString()}
                product={{
                  _id: p._id?.toString(),
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
