import { getServerSession } from "next-auth";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Profile from "./components/Profile";
import { UserType } from "@/types";
import Feedback from "../components/Feedback";

export default async function ProfilePage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  const { email, image, name } = session.user as UserType;
  return (
    <div className="flex flex-col justify-center items-center p-5 mx-auto gap-4">
      <Profile user={{ email, image, name }} />
      <Feedback />
    </div>
  );
}
