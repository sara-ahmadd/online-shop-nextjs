import React from "react";
import DashBoard from "./components/DashBoard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUserData } from "@/lib/user/getUser";
import { serialize } from "v8";

export default async function DashboardPage() {
  const session = await getServerSession(options);
  const user = await getUserData(session?.user?.email ?? "");

  return (
    <div className=" flex flex-col items-center gap-5 relative">
      <div className="pt-16 flex flex-col items-center gap-5 w-full h-full">
        {user && user.role === "admin" ? (
          <DashBoard />
        ) : (
          <h1 className="fornt-bold text-3xl h-96">
            This page can only be accessed by an admin.
          </h1>
        )}
      </div>
    </div>
  );
}
