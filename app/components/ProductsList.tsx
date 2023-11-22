"use client";
import { ProductType } from "@/types";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getFilteredProducts } from "@/lib/getFilteredProducts";
import { initProduct } from "./ProductDetails";
import { SearchContext } from "../context/Search";

export default function ProductsList() {
  const [products, setProducts] = useState([initProduct]);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    const getData = async () => {
      const data: ProductType[] = await getFilteredProducts(search);
      setProducts(data);
    };
    getData();
  }, [search]);
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
