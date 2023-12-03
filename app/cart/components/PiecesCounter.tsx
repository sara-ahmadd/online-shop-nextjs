"use client";
import { handlePieces } from "@/lib/cart/handlePieces";
import { ProductType, UserType } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function PiecesCounter({
  sign,
  product,
  user,
}: {
  sign: string;
  product: ProductType;
  user: UserType;
}) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await handlePieces(product, user, sign).then(() => {
          router.refresh();
        });
      }}
      className="btn btn-accent"
    >
      {sign === "-" ? <FaMinus /> : <FaPlus />}
    </button>
  );
}
