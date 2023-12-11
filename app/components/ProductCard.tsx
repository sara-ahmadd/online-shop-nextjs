"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { ProductType, UserType } from "@/types";
import { themeContext } from "../context/Theme";
import { addProduct } from "@/lib/cart/addProduct";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { calcSale } from "@/lib/calcSale";

export default function ProductCard({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);

  const router = useRouter();
  const { data: session } = useSession();

  const addProductToCart = async () => {
    if (session?.user?.email) {
      const p = await addProduct(session.user as UserType, product);
      router.refresh();
      return p;
    }
  };

  return (
    <div
      className={`relative flex flex-col w-80 h-96 justify-start items-center bg-slate-50
       ${theme ? "text-black" : undefined} card-animation`}
    >
      <Link
        href={`/${product._id?.toString()}`}
        className="card-flash h-80 w-full"
      >
        <Image
          src={product.image.length > 0 ? product.image : "/spinner.gif"}
          alt={product.title}
          fill={true}
          className=" object-cover"
        />
      </Link>
      <div className=" w-full px-2 flex flex-col justify-start items-start">
        <h1 className=" text-lg text-slate-500 p-0">
          {product.category ?? ""}
        </h1>
        <div className="flex justify-between items-center w-full">
          <p className="text-md font-semibold h-12">
            {product.title.length > 15
              ? `${product.title.substring(0, 12)}...`
              : product.title}
          </p>
          {product.newProduct ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </div>

        {(product.sale ?? 0) > 0 ? (
          <div className="w-full flex justify-start items-center gap-3">
            <del className="text-lg p-2 w-20 text-red-700">
              ${product.price}
            </del>
            <p className="text-lg p-2 w-20 text-slate-700">
              ${calcSale(product?.sale ?? 0, product.price)}
            </p>
          </div>
        ) : (
          <p className="text-lg p-2 w-20 text-slate-500">${product.price}</p>
        )}
        <div className="absolute left-0 top-0 flex justify-center gap-3 items-center w-fit p-3 bg-white z-50">
          <button className="w-10 cursor-pointer" onClick={addProductToCart}>
            <FaCartPlus className="font-bold text-2xl" />
          </button>
          {product.sale && product.sale > 0 ? (
            <p className="text-black font-semibold w-10 h-10 rounded-full p-5 bg-teal-100 flex justify-center items-center">
              -{product.sale}%
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
