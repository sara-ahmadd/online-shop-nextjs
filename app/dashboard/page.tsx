import React from "react";
import DashBoard from "./components/DashBoard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUserData } from "@/lib/user/getUser";
import { serialize } from "v8";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(options);
  const user = await getUserData(session?.user?.email ?? "");

  return (
    <div className=" flex flex-col items-center gap-5 relative">
      <div className="pt-16 flex flex-col items-center gap-5 w-full h-full">
        {user && user.role === "admin" ? (
          <DashBoard />
        ) : (
          <div className=" h-96 flex flex-col justify-between items-center">
            <div className=" h-80 flex flex-col justify-start items-center gap-5">
              <h1 className="font-bold text-3xl">
                This page can only be accessed by an admin.
              </h1>
              <Link href={"/"} className="btn btn-accent">
                Home
              </Link>
            </div>
            <div className="h-fit p-5 rounded-md border-2 border-teal-500 w-96 italic text-lg font-semibold flex flex-col justify-start items-start">
              <p className=" ">
                Note : These are the email and password of the admin ,so you can
                see the dashboard and deal with it.
              </p>
              <p>- Email : test@test.com</p>
              <p>- Password : 123123</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
