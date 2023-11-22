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
import { getFilteredProducts } from "@/lib/getFilteredProducts";
import { getAllProducts } from "@/lib/getAllProducts";
import { SearchContext } from "../context/Search";

export default function Searchbar() {
  const { search, handleSearch } = useContext(SearchContext);
  const { theme } = useContext(themeContext);
  useEffect(() => {
    const getFilteredData = async (txt: string) => {
      if (search && search.length > 0) {
        await getFilteredProducts(txt).then((res) => console.log(res));
      } else {
        await getAllProducts().then((res) => console.log(res));
      }
    };
    getFilteredData(search);
  }, [search]);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
    console.log(search);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    console.log(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
