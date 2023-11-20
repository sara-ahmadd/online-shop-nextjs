import React from "react";
import AddNewForm from "./../../components/AddNewForm";
import Link from "next/link";
import { updateProduct } from "@/lib/updateProduct";
import { ParamsType, ProductType } from "@/types";
import { getProduct } from "@/lib/getProduct";
import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
export default async function EditProduct({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const initProduct = await Product.findById(productId);

  const editAProduct = async (product: ProductType): Promise<ProductType> => {
    "use server";
    const res = await updateProduct(product);
    const data = await res;
    return data;
  };
  return (
    <div className="page flex flex-col justify-center items-center py-5 gap-4">
      <h1 className="font-bold text-2xl">Edit The Requested Product</h1>
      <Link href={"/dashboard"} className="btn btn-accent">
        Back
      </Link>
      <AddNewForm initialForm={initProduct} functionality={editAProduct} />
    </div>
  );
}
