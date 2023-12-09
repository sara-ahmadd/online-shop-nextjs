"use client";
import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { themeContext } from "../context/Theme";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Searchbar({
  search,
  handleSearch,
}: {
  search: string;
  handleSearch: (s: string) => void;
}) {
  const { theme } = useContext(themeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
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
      {search.length === 0 && (
        <FaSearchengin className="text-3xl absolute right-3 top-2" />
      )}
      {search.length > 0 && (
        <button onClick={() => handleSearch("")}>
          <IoCloseCircleSharp className="text-3xl absolute right-5 top-2" />
        </button>
      )}
    </form>
  );
}
