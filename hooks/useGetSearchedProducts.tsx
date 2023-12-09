"use client";
import { initProduct } from "@/app/components/ProductDetails";
import { RefreshContext } from "@/app/context/RefreshContext";
import { getAllProducts } from "@/lib/products/getAllProducts";
import { getFilteredProducts } from "@/lib/products/getFilteredProducts";
import { ProductType } from "@/types";
import React, { useContext, useEffect, useState } from "react";

function useGetSearchedProducts() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([initProduct]);
  const { refresh } = useContext(RefreshContext);

  const getProducts = async () => {
    const data = await getAllProducts();

    setProducts(data);
  };

  useEffect(() => {
    if (search.length === 0) {
      getProducts();
    } else {
      (async () => {
        const data = await getFilteredProducts(search);
        setProducts(data);
      })();
    }
  }, [search, refresh]);

  const handleSearch = async (txt: string) => {
    setSearch(txt);
  };

  const handleProducts = (productsArray: ProductType[]) => {
    setProducts(productsArray);
  };
  return { products, handleProducts, search, handleSearch };
}

export default useGetSearchedProducts;
