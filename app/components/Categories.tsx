"use client";
import { getCategories } from "@/lib/products/getCategories";
import { ProductType } from "./../../types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Categories({
  show,
  getCategoryP,
}: {
  show: boolean;
  getCategoryP: (c: string) => Promise<void>;
}) {
  const [categories, setCategories] = useState([""]);

  useEffect(() => {
    const getAllCategories = async () => {
      await getCategories().then((res) => {
        const data = Array.from(new Set(res));
        setCategories(data);
      });
    };
    getAllCategories();
  }, []);

  return (
    <div
      className={`flex ${
        show ? " opacity-100 h-16" : " opacity-0 h-0"
      } justify-center gap-4 items-center p-3 border-2 border-teal-500 rounded-md transition-opacity px-1`}
    >
      {categories?.length > 0
        ? categories.map((c) => (
            <button
              onClick={() => getCategoryP(c.toLowerCase())}
              className={` ${
                show ? " opacity-100" : " opacity-0 h-0"
              } text-center bg-teal-400/30 backdrop-blur-md w-fit h-14 flex justify-center items-center py-1 px-3 rounded font-bold`}
              key={c}
            >
              {c.toUpperCase()}
            </button>
          ))
        : null}
      <button
        onClick={() => getCategoryP("")}
        className={` ${
          show ? " opacity-100" : " opacity-0 h-0"
        }} text-center bg-teal-400/30 backdrop-blur-md w-fit h-14 flex justify-center items-center py-1 px-3 rounded font-bold`}
      >
        {"No Filters".toUpperCase()}
      </button>
    </div>
  );
}
