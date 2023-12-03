import React from "react";
import { getUserData } from "@/lib/user/getUser";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Cart from "./components/Cart";
import { ProductType } from "@/types";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/cart");
  }
  const user = session?.user;
  const userFromDb = await getUserData(user?.email as string);
  const cart = userFromDb?.cart as ProductType[];
  return <Cart user={userFromDb} cart={cart} />;
};

export default CartPage;
