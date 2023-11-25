import ProductDetails from "@/app/components/ProductDetails";
import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import { ParamsType, ProductType } from "@/types";
import React from "react";

export default async function ProductPage({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const product: ProductType = (await Product.findById(
    productId
  )) as ProductType;
  const { _id, title, image, category, description, price, newProduct } =
    product;
  return (
    <div className="page w-screen h-screen flex flex-col items-center justify-center gap-3">
      <ProductDetails
        product={{
          _id: product._id?.toString(),
          title,
          image,
          category,
          description,
          price,
          newProduct,
        }}
      />
    </div>
  );
}
export async function generateStaticParams() {
  await connectdb();
  const data: ProductType[] = await Product.find();
  return data.map((p) => {
    return {
      productId: p._id?.toString(),
    };
  });
}
