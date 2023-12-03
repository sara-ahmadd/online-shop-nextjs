"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { ProductType, UserType } from "@/types";
import { themeContext } from "../context/Theme";
import { addProduct } from "@/lib/cart/addProduct";

import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { initUser } from "./Navbar";

export default function ProductCard({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);

  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });
  const addProductToCart = async () => {
    const user = session?.user;
    const p = await addProduct(user as UserType, product);
    router.refresh();
    return p;
  };
  return (
    <div
      className={`flex flex-col w-96 h-96 justify-start items-center bg-slate-50
       ${
         theme ? "text-black" : undefined
       } card-animation border-2 border-teal-500 rounded-lg`}
    >
      <Link
        href={`/${product._id?.toString()}`}
        className="card-flash h-80 w-80"
      >
        <figure>
          <Image
            src={product.image.length > 0 ? product.image : "/spinner.gif"}
            alt={product.title}
            fill={true}
            className="rounded object-cover"
          />
        </figure>
      </Link>
      <div className="flex flex-col justify-center items-start p-2 sm:p-8 h-56 gap-2">
        <h2 className="flex justify-between items-center w-full">
          {product.title}
          {product.newProduct ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </h2>
        <div className="flex justify-between items-center w-11/12">
          <p className="font-bold text-xl w-20">${product.price}</p>
          <button
            className="w-20 h-28 cursor-pointer"
            onClick={addProductToCart}
          >
            <FaCartPlus className="font-bold text-2xl" />
          </button>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
        </div>
      </div>
    </div>
  );
}
