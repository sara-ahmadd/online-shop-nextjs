import { options } from "@/app/api/auth/[...nextauth]/options";
import ProductDetails from "@/app/components/ProductDetails";
import { connectdb } from "@/database/mongodb";
import { getUserData } from "@/lib/user/getUser";
import Product from "@/models/product";
import { ParamsType, ProductType } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProductPage({ params }: ParamsType) {
  const { productId } = params;
  const session = await getServerSession(options);
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/${productId}`);
  }
  await connectdb();
  const product = await Product.findOne({ _id: productId });
  const user = await getUserData(session?.user?.email ?? "");
  const { title, category, image, description, price, newProduct, sale } =
    product;
  return (
    <div className="page w-screen h-screen flex flex-col items-center justify-center gap-3">
      {session?.user ? (
        <ProductDetails
          product={{
            _id: product._id?.toString(),
            title,
            category,
            image,
            description,
            price,
            newProduct,
            sale,
          }}
          user={user}
        />
      ) : (
        <h1 className="font-bold text-3xl">Login or Register</h1>
      )}
    </div>
  );
}
export async function generateStaticParams() {
  await connectdb();
  const data: ProductType[] = await Product.find();
  return data.map((p) => {
    return {
      productId: p._id?.toString(),
    };
  });
}
