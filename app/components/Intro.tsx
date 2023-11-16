import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center gap-4 items-center h-fit w-full py-5">
      <h1>Hello in online_shop</h1>
      <Link className="btn btn-outline btn-accent" href={"/products"}>
        products
      </Link>
    </div>
  );
}
