"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  return (
    <div className="pt-20 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-3 items-start">
        <table>
          <thead>
            <tr className=" font-bold text-lg">
              <td>Id</td>
              <td>Image</td>
              <td>Title</td>
              <td>Pieces</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>body</tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
