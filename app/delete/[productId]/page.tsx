"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { updateProduct } from "@/lib/updateProduct";
import { ParamsType, ProductType } from "@/types";
import { getProduct } from "@/lib/getProduct";
import ProductDetails from "@/app/components/ProductDetails";
import Btn from "@/app/components/Btn";
import { deleteProduct } from "@/lib/deleteProduct";
import { usePathname, useRouter } from "next/navigation";
export default function DeleteProduct() {
  const path = usePathname();
  const id = path.slice(path.lastIndexOf("/") + 1);

  const prodInfo = async () => {
    const data: Promise<ProductType> = await getProduct(id);
    const p: ProductType = await data;
    return p;
  };
  const router = useRouter();

  useEffect(() => {
    const del = async () => {
      const product = await prodInfo();
      const data: ProductType = await deleteProduct(product);
      router.refresh();
      router.back();
      return data;
    };
    async () => {
      await del();
    };
  }, [prodInfo, router]);

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
