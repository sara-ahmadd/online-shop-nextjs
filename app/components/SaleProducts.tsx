import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import SpecialHeading from "./SpecialHeading";

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
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <SpecialHeading text_1={text_1} text_2={text_2} />
      <div className="flex justify-center flex-wrap  pl-3 gap-2 items-start ">
        {products?.length > 0 ? (
          products.map((p) => {
            const {
              title,
              category,
              image,
              description,
              price,
              newProduct,
              sale,
            } = p;
            return (
              <ProductCard
                key={p._id?.toString()}
                product={{
                  _id: p._id?.toString(),
                  title,
                  category,
                  image,
                  description,
                  price,
                  newProduct,
                  sale,
                }}
              />
            );
          })
        ) : (
          <h1 className="font-bold text-4xl italic">No Products to display!</h1>
        )}
      </div>
    </div>
  );
};

export default SaleProducts;
