"use client";
import React, { useContext } from "react";
import { themeContext } from "./../context/Theme";

export default function Parent({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${
        theme ? "dark" : "light"
      } transition-all min-h-screen min-w-screen pl-3 md:pl-24`}
    >
      {children}
    </div>
  );
}
