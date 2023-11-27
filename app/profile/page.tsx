"use client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserContext } from "../context/UserContext";
import { UserType } from "@/types";
import Btn from "../components/Btn";
import { deleteUserData } from "@/lib/user/deleteUser";

export default function ProfilePage() {
  // const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/profile");
  // }
  const router = useRouter();
  const { user, handleUser } = useContext(UserContext);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });
  useEffect(() => {
    handleUser(session?.user as UserType);
  }, [session?.user, handleUser]);

  const deleteAccount = async (): Promise<UserType> => {
    const data = await deleteUserData(user._id as string);
    console.log(data);
    return data;
  };
  return (
    <div className="flex flex-col justify-center items-center p-5 mx-auto gap-4">
      <Image
        src={user?.image ?? "/spinner.gif"}
        alt={user?.name ?? "User"}
        width={300}
        height={300}
        className=" rounded-full"
      />
      <h1 className="font-bold text-2xl">Username : {user?.name ?? "User"}</h1>
      <h1 className="font-bold text-2xl">Email : {user?.email ?? "Email"}</h1>
      <Btn val={"Delete Account"} handleFunc={deleteAccount} />
    </div>
  );
}
