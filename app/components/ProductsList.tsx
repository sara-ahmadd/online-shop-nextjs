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
    <div className="w-full flex flex-col justify-center gap-4 items-start lg:px-2">
      <div className=" w-full flex flex-col justify-center items-start gap-4 p-4">
        <Searchbar search={search} handleSearch={handleSearch} />
        <FilterCategories handleProducts={handleProducts} />
      </div>
      <div className="flex justify-center items-center w-11/12 h-96 relative overflow-x-hidden ">
        <div className="absolute left-0 top-0 flex flex-col justify-start  pl-3 gap-0 items-center w-full h-full">
          <div className="flex justify-center  pl-3 gap-2 items-center w-full h-full ">
            {products?.length > 0 ? (
              products.map((p) => {
                const {
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
              <h1 className="font-bold text-4xl italic">
                No Products to display!
              </h1>
            )}
          </div>
          <div className=" absolute left-0 top-1/3 btns w-full flex justify-between items-center z-50">
            <button className="btn btn-accent">Left</button>
            <button className="btn btn-accent">Right</button>
          </div>
        </div>
      </div>
    </div>
  );
}
