"use client"
import Link from "next/link";
import React from "react";
import ThemeBtn from "./ThemeBtn";
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  return (
    <nav className="flex flex-col items-center justify-between p-2 min-w-fit h-screen fixed bg-gradient-to-b from-teal-500/60 from-teal-400/90  t-0 l-0 z-50">
      <h1 className='h-14'>
        <Link href={"/"}>Logo</Link>
      </h1>
      <ul className="flex gap-4 items-center flex-col items-center justify-center h-1/2">
        <li>
          <ThemeBtn />
        </li>
        <li>
          <Link href={"/"} className={path === '/' ? 'border-b-4 border-teal-600 pb-2 ': undefined}>Home</Link>
        </li>
        <li>
          <Link href={"/dashboard"}
          className={path === '/dashboard' ? 'border-b-4 border-teal-600 pb-2 ': undefined}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/contact"} className={path === '/contact' ? 'border-b-4 border-teal-600 pb-2 ': undefined}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
