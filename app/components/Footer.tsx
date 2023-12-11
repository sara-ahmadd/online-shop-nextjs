"use client";
import React, { useContext } from "react";
import { themeContext } from "../context/Theme";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`page h-28 border-t-2 p-10 pb-30 sm:pb-10 w-full text-center ${
        theme ? "border-white" : "border-slate-500"
      }`}
    >
      All rights reserved &copy;{year}|Made With ❤ By Sara
    </div>
  );
}
