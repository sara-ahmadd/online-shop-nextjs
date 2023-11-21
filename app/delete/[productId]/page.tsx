import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ParamsType, ProductType } from "@/types";
import { getProduct } from "@/lib/getProduct";
import { initProduct } from "@/app/components/ProductDetails";
import Btn from "@/app/components/Btn";
import { deleteProduct } from "@/lib/deleteProduct";
import { usePathname, useRouter } from "next/navigation";
import { connectdb } from "@/database/mongodb";
import Product from "@/models/product";
import Refresh from "@/app/components/Refresh";
export default async function DeleteProduct({ params }: ParamsType) {
  const { productId } = params;
  await connectdb();
  const product = await Product.findById(productId);
  // const product = await getProduct(productId);
  await deleteProduct(product);

  return (
    <div className="page flex flex-col justify-center items-center py-5 gap-4">
      <Link href={"/dashboard"} className="btn btn-accent">
        Back
      </Link>
      <h1 className="font-bold text-2xl">
        The product is deleted successfully!
      </h1>
    </div>
  );
}
