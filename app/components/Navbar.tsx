"use client";
import Link from "next/link";
import React, { useContext } from "react";
import ThemeBtn from "./ThemeBtn";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { themeContext } from "../context/Theme";

export default function Navbar() {
  const { theme } = useContext(themeContext);
  const path = usePathname();
  return (
    <nav
      className={`flex flex-col items-center justify-start gap-14 p-2 min-w-fit h-4/5 top-10 fixed bg-gradient-to-b from-teal-500/40 to-teal-300/50  backdrop-blur-md rounded-md ml-5  z-50 ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <h1 className="h-14">
        <Link href={"/"}>Logo</Link>
      </h1>
      <ul className="flex gap-4 items-center flex-col justify-center h-1/2">
        <li>
          <ThemeBtn />
        </li>
        <li>
          <Link
            href={"/"}
            className={
              path === "/" ? "border-b-4 border-teal-600 pb-2 " : undefined
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard"}
            className={
              path === "/dashboard"
                ? "border-b-4 border-teal-600 pb-2 "
                : undefined
            }
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href={"/contact"}
            className={
              path === "/contact"
                ? "border-b-4 border-teal-600 pb-2 "
                : undefined
            }
          >
            Contact
          </Link>
        </li>
        <li>
          <div className={`dropdown  ${theme ? "text-black" : undefined}`}>
            <label tabIndex={0} className="btn m-1">
              <FaUser />
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
              <li>
                <Link href={"/cart"}>Cart</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
