import { deleteProduct } from "@/lib/products/deleteProduct";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { RefreshContext } from "../context/RefreshContext";
import { calcSale } from "@/lib/calcSale";

export default function Row({
  product,
  order,
}: {
  product: ProductType;
  order: number;
}) {
  const { handleRefresh } = useContext(RefreshContext);

  const delProduct = async () => {
    await Swal.fire(
      "Warning!",
      `You will delete ${product.title}.`,
      "question"
    ).then(async (res) => {
      if (res.isConfirmed) {
        await deleteProduct(product).then(() => {
          toast.success("Product is deleted successfully.");
          handleRefresh();
        });
      }
    });
  };
  return (
    <tr className="border-b-2 border-accent">
      <th>{order + 1}</th>
      <td>{product.title}</td>
      <td>
        <Image
          src={product.image ?? "/spinner.gif"}
          alt={product.title}
          width={150}
          height={150}
          className="rounded"
        />
      </td>
      <td className="flex flex-col justify-start items-start">
        {(product.sale ?? 0) > 0 ? (
          <>
            <del className="text-lg p-2 w-20 text-red-700">
              ${product.price}
            </del>
            <p className="text-lg p-2 w-20 text-slate-500">
              ${calcSale(product?.sale ?? 0, product.price)}
            </p>
          </>
        ) : (
          <p className="text-lg p-2 w-20 text-slate-500">${product.price}</p>
        )}
      </td>
      <td>{product.category}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/${product._id}`} className="btn btn-accent">
            View
          </Link>
          <Link href={`/edit/${product._id}`} className="btn btn-accent">
            Edit
          </Link>
          <button className="btn btn-accent" onClick={delProduct}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
