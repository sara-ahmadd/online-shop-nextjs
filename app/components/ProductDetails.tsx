"use client";
import { ProductType, UserType } from "@/types";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { themeContext } from "../context/Theme";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PiecesCounter from "../cart/components/PiecesCounter";
import { initUser } from "./Navbar";
import { getUserData } from "@/lib/user/getUser";
import { addProduct } from "@/lib/cart/addProduct";
import { calcSale } from "@/lib/cart/calcSale";

export const initProduct: ProductType = {
  _id: "",
  title: "",
  category: "",
  image: "",
  price: 0,
  description: "",
  newProduct: false,
};
export default function ProductDetails({
  product,
  user,
}: {
  product: ProductType;
  user: UserType;
}) {
  const { theme } = useContext(themeContext);
  const router = useRouter();

  const addProductToCart = async () => {
    const p = await addProduct(user as UserType, product);
    router.refresh();
    return p;
  };

  const [cart, setCart] = useState(user.cart);
  const currentProductinUserCart =
    cart && product && cart.find((i) => i._id === product._id)?.quantity;

  useEffect(() => {
    setCart(user.cart);
  }, [user.cart]);

  return (
    <div
      className={`w-11/12 pt-10 h-fit flex flex-col mx-auto justify-center items-center gap-5 ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <button
        onClick={() => router.back()}
        className="btn btn-accent btn-outline w-fit"
      >
        Back
      </button>

      <div className="py-20 md:py-5 w-full h-11/12 flex justify-center items-start gap-5">
        <div className="w-full sm:w-fit">
          <Image
            src={product?.image ?? "/spinner.gif"}
            alt={product?.title}
            width={400}
            height={300}
          />
        </div>
        <div
          className={`w-full sm:w-1/2 flex flex-col justify-start items-start gap-2 border-l-2 ${
            theme ? "border-slate-50 text-white" : "border-slate-800 text-black"
          } h-full px-5`}
        >
          <h2 className={`text-xl ${theme ? "text-white" : "text-black"}`}>
            {product?.category}
          </h2>
          <hr />
          <h1 className="text-2xl font-semibold">{product?.title}</h1>
          <hr />
          <div className="text-2xl font-semibold flex flex-col justify-center items-start">
            {(product.sale ?? 0) > 0 ? (
              <>
                <del className="text-lg p-2 w-20 text-red-700">
                  ${product.price}
                </del>
                <p
                  className={`text-lg p-2 w-20  ${
                    theme ? "text-white" : "text-black"
                  }`}
                >
                  ${calcSale(product?.sale ?? 0, product.price)}
                </p>
              </>
            ) : (
              <p
                className={`text-lg p-2 w-20 text-slate-500 ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                ${product.price}
              </p>
            )}
            <span className={`text-sm ${theme ? "text-white" : "text-black"}`}>
              &Free Shipping
            </span>
          </div>
          <hr />
          <h1 className="text-2xl font-semibold">-{product.sale} %</h1>
          <hr />

          <div
            className={`flex w-full justify-start items-center gap-4 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <div className="w-1/2 flex justify-center items-center gap-3">
              <PiecesCounter user={user} product={product} sign="-" />
              <>{currentProductinUserCart ?? 0}</>
              <PiecesCounter user={user} product={product} sign="+" />
            </div>
            <button className="w-10 cursor-pointer" onClick={addProductToCart}>
              <FaCartPlus className="font-bold text-2xl" />
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
