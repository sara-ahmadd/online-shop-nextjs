import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import SpecialHeading from "./SpecialHeading";
import SaleSlider from "./SaleSlider";

const SaleProducts = async ({
  text_1,
  text_2,
}: {
  text_1: string;
  text_2: string;
}) => {
  await connectdb();
  const products: ProductType[] = await Product.find({
    sale: { $gt: 0 },
  });
  const prods = products.map((p): ProductType => {
    const {
      _id,
      category,
      title,
      image,
      sale,
      price,
      description,
      newProduct,
    } = p;
    return {
      _id: _id?.toString(),
      category,
      title,
      image,
      sale,
      price,
      description,
      newProduct,
    };
  });
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <SpecialHeading text_1={text_1} text_2={text_2} />
      <SaleSlider products={prods} />
    </div>
  );
};

export default SaleProducts;
