import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import Link from 'next/link'

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col justify-center items-start p-5">
      <h1>{product.title}</h1>
    <Link href={'/products/productId'}>
        <Image src={product.image} alt={product.title} width={200} height={200} />
        <div className="flex justify-between items-center">
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
    </Link>
    </div>
  );
}
