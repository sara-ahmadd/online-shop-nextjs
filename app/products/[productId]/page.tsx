import ProductDetails from "@/app/components/ProductDetails";
import Link from "next/link";
import React from "react";

export default function ProductPage() {
  const product = {
    id: "334356",
    title: "jacket",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 0,
    description: "jdsrfgh cvnjjdijg kf",
    new: true,
  };
  return (
    <div className="page w-96 h-screen flex flex-col items-center justify-center gap-3">
      <Link href={"/products"} className="btn btn-accent btn-outline">
        Products
      </Link>
      <ProductDetails product={product} />
    </div>
  );
}
