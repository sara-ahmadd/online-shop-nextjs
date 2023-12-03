"use client";
import React, { useEffect, useState } from "react";
import { ProductType, UserType } from "@/types";
import Image from "next/image";
import { deleteProductFromCart } from "@/lib/cart/deleteItemFromCart";
import { emptyCart } from "@/lib/cart/emptyCart";
import Btn from "@/app/components/Btn";
import {  useRouter } from "next/navigation";
import PiecesCounter from "./PiecesCounter";
import Swal from "sweetalert2";

const Cart = ({ user, cart }: { user: UserType; cart: ProductType[] }) => {
  const router = useRouter();

  const totalCost = () => {
    let sum = 0;
    cart?.map((p) => {
      sum += p.price * (p.quantity as number);
    });
    return sum;
  };
  const totalPieces = () => {
    let pieces = 0;
    cart?.map((p) => {
      pieces += p.quantity as number;
    });

    return pieces;
  };
  const deleteProduct = async (p: ProductType, u: UserType) => {
    await deleteProductFromCart(p, u).then(() => {
      router.refresh();
    });
  };
  const clearCart = async () => {
    await emptyCart(user).then(() => {
      router.refresh();
    });
  };
  const confirmCart = () => {
    Swal.fire({
      title: "Shipping your order...",
    }).then(async () => {
      await emptyCart(user);
      router.refresh();
    });
  };
  return (
    <div className="pt-20 flex justify-center items-center pb-20">
      <div className="overflow-x-auto">
        {cart && cart.length > 0 ? (
          <>
            <table className="table-xs sm:table-lg">
              <thead>
                <tr className=" font-bold text-lg">
                  <td>Image</td>
                  <td>Title</td>
                  <td>Pieces</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((i, index) => (
                  <tr key={i._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image
                        src={i.image}
                        alt={i.title}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{i.title}</td>
                    <td className="flex gap-2 justify-center items-center">
                      <PiecesCounter user={user} product={i} sign="-" />
                      {i.quantity}
                      <PiecesCounter user={user} product={i} sign="+" />
                    </td>
                    <td>${i.price}</td>
                    <td>{i.category}</td>
                    <td>
                      <Btn
                        val="Remove"
                        handleFunc={() => {
                          deleteProduct(i, user);
                        }}
                      />
                    </td>
                  </tr>
                ))}
                <tr className=" border-t-2 border-teal-500">
                  <td colSpan={5} className="font-bold text-xl ">
                    Total Cost: ${totalCost()}
                  </td>
                  <td colSpan={2} className="flex flex-col gap-2 ">
                    <Btn val="Clear" handleFunc={clearCart} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={5} className="font-bold text-xl ">
                    <span>Total Pieces: {totalPieces()}</span>
                  </td>
                  <td colSpan={2} className="flex flex-col gap-2 ">
                    <button onClick={confirmCart} className="btn btn-accent">
                      Confirm
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-3xl">No products in your cart</h1>
            <Btn val={"Back"} handleFunc={() => router.back()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
