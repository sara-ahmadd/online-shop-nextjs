"use client";
import { getUserData } from "@/lib/user/getUser";
import { ProductType, UserType } from "@/types";
import { useSession } from "next-auth/react";
import React, { createContext, useState, useContext, useEffect } from "react";

const initCart: ProductType[] = [];

type UserContextType = {
  cart: ProductType[];
  handleCart: (t: ProductType[]) => void;
};
const initContext: UserContextType = {
  cart: [],
  handleCart: (arr: ProductType[]) => {},
};

export const CartContext = createContext(initContext);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  const user = session?.user;
  const [cart, setCart] = useState(initCart);
  const handleCart = (arr: ProductType[]) => {
    setCart(arr);
  };
  useEffect(() => {
    const getCart = async () => {
      const userFromDb = await getUserData(user?.email as string);
      setCart(userFromDb?.cart ?? []);
    };
    getCart();
  }, [user?.email]);
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}
