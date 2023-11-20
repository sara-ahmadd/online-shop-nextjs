import ProductDetails from "@/app/components/ProductDetails";
import { getProducts } from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProduct";
import { ParamsType, ProductType } from "@/types";
import Link from "next/link";
import React from "react";

export default async function ProductPage({
  params: { productId },
}: ParamsType) {
  const data = await getProduct(productId);
  const product = await data;
  return (
    <div className="page w-96 h-screen flex flex-col items-center justify-center gap-3">
      <ProductDetails product={product} />
    </div>
  );
}
export const generateStaticParams = async () => {
  const res: Promise<ProductType[]> = await getProducts();
  const prods: ProductType[] = await res;
  return prods.map((p) => ({
    productId: p._id,
  }));
};
