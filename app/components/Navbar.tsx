"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import ThemeBtn from "./ThemeBtn";
import { redirect, usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { themeContext } from "../context/Theme";
import Image from "next/image";
import { ProductType, UserType } from "@/types";
import { ImHome } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { GrContact } from "react-icons/gr";
import { BsShopWindow } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

export default function Navbar({ user }: { user: UserType }) {
  const { theme } = useContext(themeContext);
  const path = usePathname();

  const getPieces = (c: ProductType[]) => {
    let sum = 0;
    c?.map((p) => {
      sum += p.quantity as number;
    });
    return sum;
  };

  return (
    <nav
      className={`flex md:flex-col items-center justify-between md:justify-start gap-5 md:gap-14 p-2 min-w-full md:min-w-max h-14 md:h-4/5 bottom-3 md:top-10 left-1/2 md:left-1 -translate-x-1/2 fixed bg-gradient-to-b from-teal-500/40 to-teal-300/50  backdrop-blur-md rounded-md ml-0 md:ml-6  z-50 ${
        theme ? "text-white" : "text-black"
      } px-5 md:px-1 h-14 text-2xl`}
    >
      <h1 className="h-14 flex items-center">
        <Link
          href={"/"}
          title="Home"
          className={path === "/" ? "text-teal-500 font-bold" : undefined}
        >
          <BsShopWindow />
        </Link>
      </h1>
      <ul className="flex gap-4 items-center md:flex-col justify-center h-1/2">
        <li>
          <ThemeBtn />
        </li>
        <li>
          <Link
            href={"/"}
            className={path === "/" ? "text-teal-500 font-bold" : undefined}
            title="Home"
          >
            <ImHome />
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard"}
            className={
              path === "/dashboard" ? "text-teal-500 font-bold" : undefined
            }
            title="Dashboard"
          >
            <RxDashboard />
          </Link>
        </li>

        <li>
          <Link
            href={"/contact"}
            className={
              path === "/contact" ? "text-teal-500 font-bold" : undefined
            }
            title="Contact"
          >
            <GrContact />
          </Link>
        </li>
        <li>
          <div
            className={`dropdown dropdown-top md:dropdown-bottom dropdown-end md:dropdown-right  ${
              theme ? "text-black" : undefined
            }`}
          >
            <label tabIndex={0} className="m-1 cursor-pointer">
              {user && user.image ? (
                <Image
                  src={user?.image ?? "/spinner.gif"}
                  alt={user?.name ?? "User"}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              ) : (
                <FaUser />
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/api/auth/signin"}>Signin</Link>
              </li>
              <li>
                <Link href={"/signup"}>Signup</Link>
              </li>
              <li>
                <Link href={"/api/auth/signout"}>Signout</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            href={"/cart"}
            className="flex justify-center items-center relative w-14"
          >
            <span className="text-left">
              <GiShoppingCart className="w-7 h-7 font-bold" />
            </span>
            <span className="absolute -right-1 -top-2 text-sm bg-red-800 w-5 h-5 rounded-full flex justify-center items-center text-white">
              {getPieces(user.cart ?? [])}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
