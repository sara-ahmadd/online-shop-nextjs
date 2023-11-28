"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { ProductType, UserType } from "@/types";
import { themeContext } from "../context/Theme";
import { addProduct } from "@/lib/cart/addProduct";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: ProductType }) {
  const { theme } = useContext(themeContext);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  const router = useRouter();

  const addProductToCart = async () => {
    const p = await addProduct(session?.user as UserType, product);
    router.refresh();
    return p;
  };
  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl hover:scale-105 transition-all ${
        theme ? "text-black" : undefined
      } card-animation `}
    >
      <Link href={`/${product._id?.toString()}`}>
        <figure className="card-flash h-96 w-80">
          <Image
            src={product.image.length > 0 ? product.image : "/spinner.gif"}
            alt={product.title}
            fill={true}
            className="rounded object-cover"
          />
        </figure>
      </Link>
      <div className="card-body p-2 sm:p-8">
        <h2 className="card-title">
          {product.title}
          {product.newProduct ? (
            <div className="badge badge-secondary">NEW</div>
          ) : null}
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">${product.price}</p>
          <button
            className="w-28 h-28 cursor-pointer"
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
