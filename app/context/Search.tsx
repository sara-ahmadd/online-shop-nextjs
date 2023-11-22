"use client";
import React, { createContext, useState, useContext } from "react";

type SearchContextType = {
  search: string;
  handleSearch: (t: string) => void;
};
const initContext: SearchContextType = {
  search: "",
  handleSearch: (t: string) => {},
};

export const SearchContext = createContext(initContext);

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const handleSearch = (txt: string) => {
    setSearch(txt);
  };
  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
