import { getServerSession } from "next-auth";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getUserData } from "@/lib/user/getUser";
import Profile from "./components/Profile";

export default async function ProfilePage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  const user = await getUserData(session.user?.email ?? "");
  return (
    <div className="flex flex-col justify-center items-center p-5 mx-auto gap-4">
      <Profile user={user} />
    </div>
  );
}
