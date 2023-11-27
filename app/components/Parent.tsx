"use client";
import React, { useContext, useEffect } from "react";
import { themeContext } from "./../context/Theme";
import { UserContext } from "../context/UserContext";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserType } from "@/types";

export default function Parent({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${
        theme ? "dark" : "light"
      } transition-all min-h-screen min-w-screen pl-3 md:pl-24`}
    >
      {children}
    </div>
  );
}
