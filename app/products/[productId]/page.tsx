import ProductDetails from "@/app/components/ProductDetails";
import { connectdb } from "@/database/mongodb";
import getProducts from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProduct";
import Product from "@/models/product";
import { ParamsType, ProductType } from "@/types";
import { log } from "console";
import React from "react";

export default async function ProductPage({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const product = await Product.findById(productId);
  return (
    <div className="page w-96 h-screen flex flex-col items-center justify-center gap-3">
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
