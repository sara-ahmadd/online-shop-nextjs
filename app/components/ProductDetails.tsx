"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { themeContext } from "./../context/Theme";
import { FaCartPlus } from "react-icons/fa";

export default function ProductDetails({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`card w-11/12 lg:card-side bg-base-100 shadow-xl ${
        theme ? "text-black" : undefined
      }`}
    >
      <Link href={"/products/productId"}>
        <figure className="card-flash">
          <Image
            src={product.image}
            alt={product.title}
            width={350}
            height={70}
            className="rounded"
          />
        </figure>
      </Link>
      <div className="card-body p-2 sm:p-8">
        <h2 className="card-title">
          {product.title}
          {product.new ? (
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
  );
}
