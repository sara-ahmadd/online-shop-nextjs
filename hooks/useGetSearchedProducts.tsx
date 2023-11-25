import { initProduct } from "@/app/components/ProductDetails";
import { getAllProducts } from "@/lib/products/getAllProducts";
import { getFilteredProducts } from "@/lib/products/getFilteredProducts";
import { ProductType } from "@/types";
import React, { useEffect, useState } from "react";

function useGetSearchedProducts() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([initProduct]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);
  const handleSearch = async (txt: string) => {
    setSearch(txt);
    const data = await getFilteredProducts(search);
    setProducts(data);
  };
  const handleProducts = (productsArray: ProductType[]) => {
    setProducts(productsArray);
  };
  return { products, handleProducts, search, handleSearch };
}

export default useGetSearchedProducts;
