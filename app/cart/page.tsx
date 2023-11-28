import React from "react";
import { getUserData } from "@/lib/user/getUser";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Cart from "./components/Cart";

const CartPage = async () => {
  const data = await getServerSession(options);
  const user = data?.user;
  const userFromDb = await getUserData(user?.email as string);
  const cart = userFromDb?.cart;

  return (
    <>
      <Cart cart={cart ?? []} userFromDb={userFromDb} />
    </>
  );
};

export default CartPage;
