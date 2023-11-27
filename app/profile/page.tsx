"use client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserContext } from "../context/UserContext";
import { UserType } from "@/types";

export default function ProfilePage() {
  // const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/profile");
  // }
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
  return (
    <div>
      <h1>{user?.name ?? "User"}</h1>
      <Image
        src={user?.image ?? "/spinner.gif"}
        alt={user?.name ?? "User"}
        width={100}
        height={100}
        className=" rounded-full"
      />
    </div>
  );
}
