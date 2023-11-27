import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/UserContext";
import { useSession } from "next-auth/react";
import { ProductType, UserType } from "@/types";
import { getUserData } from "@/lib/user/getUser";
import { initProduct } from "../components/ProductDetails";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import Btn from "../components/Btn";

const Cart = async () => {
  const data = await getServerSession(options);
  const user = data?.user;
  const userFromDb = await getUserData(user?.email as string);
  const cart = userFromDb.cart;
  const totalCost = () => {
    let sum = 0;
    cart?.map((p) => {
      sum += p.price * (p.quantity as number);
    });
    return sum;
  };
  const totalPiesces = () => {
    let pieces = 0;
    cart?.map((p) => {
      pieces += p.quantity as number;
    });
    return pieces;
  };
  return (
    <div className="pt-20 flex justify-center items-center pb-20">
      <div className="overflow-x-auto">
        {cart ? (
          <>
            <table className="table-xs sm:table-lg">
              <thead>
                <tr className=" font-bold text-lg">
                  <td>Id</td>
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
                    <td>{i.quantity}</td>
                    <td>${i.price}</td>
                    <td>{i.category}</td>
                    <td>
                      <button className="btn btn-accent">Delete</button>
                    </td>
                  </tr>
                ))}
                <tr className=" border-t-2 border-teal-500">
                  <td colSpan={5} className="font-bold text-xl ">
                    Total Cost: ${totalCost()}
                  </td>
                  <td colSpan={2} className="flex flex-col gap-2 ">
                    <button className="btn btn-accent">Clear</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5} className="font-bold text-xl ">
                    <span>Total Pieces: {totalPiesces()}</span>
                  </td>
                  <td colSpan={2} className="flex flex-col gap-2 ">
                    <button className="btn btn-accent">Confirm</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <h1>No products in your cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
