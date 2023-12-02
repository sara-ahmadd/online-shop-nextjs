"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { UserType } from "@/types";
import { deleteUserData } from "@/lib/user/deleteUser";
import Btn from "@/app/components/Btn";
import { signOut } from "next-auth/react";

export default function Profile({ user }: { user: UserType }) {
  const router = useRouter();
  const deleteAccount = async () => {
    if (user) {
      const data = await deleteUserData(user._id as string);
      signOut({ redirect: false }).then(() => {
        router.push("/");
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center p-5 mx-auto gap-4">
      {user ? (
        <>
          <Image
            src={user?.image ?? "/spinner.gif"}
            alt={user?.name ?? "User"}
            width={300}
            height={300}
            className=" rounded-full"
          />
          <h1 className="font-bold text-2xl">
            Username : {user?.name ?? "User"}
          </h1>
          <h1 className="font-bold text-2xl">
            Email : {user?.email ?? "Email"}
          </h1>
          <Btn val={"Delete Account"} handleFunc={deleteAccount} />
        </>
      ) : (
        <h1>Signin!</h1>
      )}
    </div>
  );
}
