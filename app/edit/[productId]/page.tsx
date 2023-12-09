import React from "react";
import AddNewForm from "../../components/ProductForm";
import Link from "next/link";
import { updateProduct } from "@/lib/products/updateProduct";
import { ParamsType, ProductType } from "@/types";
import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
export default async function EditProduct({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const initProduct = (await Product.findOne({
    _id: productId,
  })) as ProductType;

  const editAProduct = async (product: ProductType): Promise<ProductType> => {
    "use server";
    const data = await updateProduct(product);
    return data;
  };
  const { _id, title, category, image, sale, price, description } = initProduct;
  return (
    <div className="flex flex-col justify-center items-center py-5 gap-4">
      <h1 className="font-bold text-2xl">Edit The Requested Product</h1>
      <Link href={"/dashboard"} className="btn btn-accent">
        Back
      </Link>
      <AddNewForm
        initialForm={{ _id, title, category, image, sale, price, description }}
        functionality={editAProduct}
      />
    </div>
  );
}
