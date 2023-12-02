"use client";
import { getUserData } from "@/lib/user/getUser";
import { ProductType, UserType } from "@/types";
import { useSession } from "next-auth/react";
import React, { createContext, useState, useContext, useEffect } from "react";

const initCart: ProductType[] = [];

type UserContextType = {
  cart: ProductType[];
  handleCart: (t: ProductType[]) => void;
  user: UserType;
};
const initContext: UserContextType = {
  cart: [],
  handleCart: (arr: ProductType[]) => {},
  user: { email: "", password: "", image: "", cart: [] },
};

export const CartContext = createContext(initContext);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Signin Or Signup");
    },
  });
  // const user = session?.user as UserType;
  const [user, setUser] = useState(initContext.user);
  const [cart, setCart] = useState(initCart);
  const handleCart = (arr: ProductType[]) => {
    setCart(arr);
  };
  useEffect(() => {
    if (session) {
      setUser(session?.user as UserType);
    }
    const getCart = async () => {
      const userFromDb = await getUserData(user?.email as string);
      if (userFromDb) {
        setUser(userFromDb);
      }
      setCart(userFromDb?.cart ?? []);
    };
    getCart();
  }, [session?.user]);
  return (
    <CartContext.Provider value={{ cart, handleCart, user }}>
      {children}
    </CartContext.Provider>
  );
}
