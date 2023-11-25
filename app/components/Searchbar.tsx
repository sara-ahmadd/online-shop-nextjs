"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
} from "react";
import { FaSearchengin } from "react-icons/fa6";
import { themeContext } from "../context/Theme";
import { getFilteredProducts } from "@/lib/products/getFilteredProducts";
import { getAllProducts } from "@/lib/products/getAllProducts";
import { SearchContext } from "../context/Search";
import { ProductType } from "./../../types";
import Btn from "./Btn";
import Categories from "./Categories";
import { getCategoryProducts } from "@/lib/products/getCategoryProducts";

export default function Searchbar({
  search,
  handleSearch,
}: {
  search: string;
  handleSearch: (s: string) => void;
}) {
  const { theme } = useContext(themeContext);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
    console.log(search);
  };

  return (
    <form
      className={`flex gap-4 items-center relative ${
        theme ? "text-black" : undefined
      }`}
    >
      <input
        value={search}
        onChange={handleChange}
        placeholder="Search"
        type="text"
        className={`input input-accent p-3 `}
      />
      <FaSearchengin className="text-3xl absolute right-3 top-2" />
    </form>
  );
}
