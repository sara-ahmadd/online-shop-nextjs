"use client";
import React, { createContext, useState, useContext } from "react";

type SearchContextType = {
  refresh: boolean;
  handleRefresh: () => void;
};
const initContext: SearchContextType = {
  refresh: false,
  handleRefresh: () => {},
};

export const RefreshContext = createContext(initContext);

export default function RefreshContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  return (
    <RefreshContext.Provider value={{ refresh, handleRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}
