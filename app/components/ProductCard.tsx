"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { ProductType, UserType } from "@/types";
import { themeContext } from "../context/Theme";
import { addProduct } from "@/lib/cart/addProduct";

import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ProductCard({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);

  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });
  const user = session?.user;
  const addProductToCart = async () => {
    const p = await addProduct(user as UserType, product);
    router.refresh();
    return p;
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
        <h2 className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold p-0">{product.title}</span>
          {product.newProduct ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </h2>
        <p className="text-lg p-2 w-20 text-slate-500">${product.price}</p>
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
