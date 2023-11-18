import Link from "next/link";
import React from "react";

export default function Row() {
  return (
    <tr>
      <th>1</th>
      <td>T-shirt</td>
      <td>Quality Control Specialist</td>
      <td>$122</td>
      <td>Clothes</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={"/products/productId"} className="btn btn-accent">
            View
          </Link>
          <Link href={"/edit/productId"} className="btn btn-accent">
            Edit
          </Link>
          <Link href={"/"} className="btn btn-accent">
            Delete
          </Link>
        </div>
      </td>
    </tr>
  );
}
