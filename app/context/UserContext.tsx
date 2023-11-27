"use client";
import { UserType } from "@/types";
import React, { createContext, useState, useContext } from "react";

const initUser: UserType = {
  name: "",
  email: "",
  image: "",
  cart: [],
};

type UserContextType = {
  user: UserType;
  handleUser: (t: UserType) => void;
};
const initContext: UserContextType = {
  user: initUser,
  handleUser: (t: UserType) => {},
};

export const UserContext = createContext(initContext);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(initUser);
  const handleUser = (u: UserType) => {
    setUser(u);
  };
  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
}
