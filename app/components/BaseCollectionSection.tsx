import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BaseCollectionSection() {
  return (
    <div className="flex justify-between items-center w-11/12 h-11/12">
      <div className="flex flex-col w-full sm:w-1/2 h-full  justify-center items-center">
        <Image
          src={"/base-coll.jpg"}
          alt="img"
          width={400}
          height={300}
          className=" object-cover"
        />

        <div className="p-10 flex flex-col justify-center items-center gap-2">
          <h2 className="text-xl text-slate-500">MEN</h2>
          <h1 className="text-4xl font-semibold">
            The base collection - Ideal every day.
          </h1>
          <Link href={"/men"} className="btn bg-black text-white rounded-none">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="w-1/2 px-3 h-full hidden md:block">
        <Image src={"/base-coll.jpg"} alt="img" width={600} height={700} />
      </div>
    </div>
  );
}
