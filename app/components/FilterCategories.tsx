import React, { useState } from "react";
import Btn from "./Btn";
import Categories from "./Categories";
import { getCategoryProducts } from "@/lib/products/getCategoryProducts";
import { ProductType } from "@/types";
import { FaFilter } from "react-icons/fa";
function FilterCategories({
  handleProducts,
}: {
  handleProducts: (array: ProductType[]) => void;
}) {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategories = () => {
    setShowCategories(!showCategories);
  };
  const getCatProducts = async (c: string) => {
    const data = await getCategoryProducts(c);
    handleProducts(data);
  };

  return (
    <div
      className={`w-full flex flex-col justify-between items-start h-32 ${
        showCategories ? "h-fit" : "h-5"
      }`}
    >
      <button onClick={handleCategories} className="btn btn-outline btn-accent">
        <FaFilter />
      </button>
      <div className={`w-full z-50 `}>
        <Categories show={showCategories} getCategoryP={getCatProducts} />
      </div>
    </div>
  );
}

export default FilterCategories;
