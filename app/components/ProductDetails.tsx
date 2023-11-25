"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { themeContext } from "../context/Theme";
import { useRouter } from "next/navigation";

export const initProduct: ProductType = {
  _id: "",
  title: "",
  category: "",
  image: "",
  price: 0,
  description: "",
  newProduct: false,
};
export default function ProductDetails({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);
  const router = useRouter();
  return (
    <div className="w-11/12 flex flex-col mx-auto justify-center items-center gap-5">
      <button
        onClick={() => router.back()}
        className="btn btn-accent btn-outline w-fit"
      >
        Back
      </button>
      <div
        className={`card card-compact sm:card-side bg-base-100 shadow-xl ${
          theme ? "text-black" : undefined
        } w-full`}
      >
        <figure className="relative h-96 w-full sm:w-1/2">
          <Image
            src={product.image.length > 0 ? product.image : "/spinner.gif"}
            alt={product.title}
            fill
            sizes="max-width:100%; height:100%"
            className="rounded object-cover"
          />
        </figure>
        <div className="card-body p-2 sm:p-8">
          <h2 className="card-title">
            {product.title}
            {product.newProduct ? (
              <div className="badge badge-secondary">NEW</div>
            ) : null}
          </h2>
          <p>{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">${product.price}</p>
            <FaCartPlus className="font-bold text-2xl" />
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
