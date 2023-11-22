"use client";
import { getCategories } from "@/lib/getCategories";
import React, { useEffect, useState } from "react";

export default function Categories() {
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
    <div className="flex gap-3 justify-center items-center p-3 bg-gradient-to-r from-teal-500/60 to-teal-300/20">
      {categories?.length > 0
        ? categories.map((c) => <h1 key={c}>{c.toUpperCase()}</h1>)
        : null}
    </div>
  );
}
