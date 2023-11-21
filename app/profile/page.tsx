import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  return (
    <div className="page">
      <h1>{session?.user?.name ?? "User"}</h1>
      <Image
        src={session?.user?.image ?? "/spinner.gif"}
        alt={session?.user?.name ?? "User"}
        width={100}
        height={100}
        className=" rounded-full"
      />
    </div>
  );
}
