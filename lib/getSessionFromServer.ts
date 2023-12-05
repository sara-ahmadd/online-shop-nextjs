"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserData } from "./user/getUser";

export const getSession = async () => {
  const session = await getServerSession(options);
  const userFromDb = await getUserData(session?.user?.email as string);
  console.log(session?.user);
  return userFromDb;
};
