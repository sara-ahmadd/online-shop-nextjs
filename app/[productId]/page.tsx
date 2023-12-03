import { options } from "@/app/api/auth/[...nextauth]/options";
import ProductDetails from "@/app/components/ProductDetails";
import { connectdb } from "@/database/mongodb";
import { getProduct } from "@/lib/products/getProduct";
import Product from "@/models/product";
import { ParamsType, ProductType } from "@/types";
import React from "react";

export default async function ProductPage({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const products = await Product.find();
  const product = products.find((p) => p._id === productId);

  return (
    <div className="page w-screen h-screen flex flex-col items-center justify-center gap-3">
      <ProductDetails product={product} />
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
