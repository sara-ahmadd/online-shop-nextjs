import React from "react";
import { getUserData } from "@/lib/user/getUser";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Links from "./Links";
import { UserType } from "@/types";
import Image from "next/image";
export const initUser: UserType = {
  name: "",
  email: "",
  image: "",
  cart: [],
};
export default async function Navbar() {
  const session = await getServerSession(options);
  const u = await getUserData(session?.user?.email as string);

  return (
    <>
      <Links user={u} />
    </>
  );
}
