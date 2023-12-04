import { ProductType } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

const SpecificProducts = ({
  title,
  products,
}: {
  title: string;
  products: ProductType[];
}) => {
  return (
    <div className="page flex flex-col justify-center items-start gap-5">
      <h1 className="text-5xl font-semibold p-5">{title}</h1>
      <div className="page flex justify-center flex-wrap  p-20 gap-2 items-start w-full h-full ">
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

export default SpecificProducts;
