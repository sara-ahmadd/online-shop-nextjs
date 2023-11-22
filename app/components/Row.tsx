import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Row({
  product,
  order,
}: {
  product: ProductType;
  order: number;
}) {
  return (
    <tr>
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
      <td>${product.price}</td>
      <td>{product.category}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/products/${product._id}`} className="btn btn-accent">
            View
          </Link>
          <Link href={`/edit/${product._id}`} className="btn btn-accent">
            Edit
          </Link>
          <Link href={`/delete/${product._id}`} className="btn btn-accent">
            Delete
          </Link>
        </div>
      </td>
    </tr>
  );
}
