import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SpringSection() {
  return (
    <div className="page spring_section flex  flex-wrap justify-between items-center w-full mb-24 lg:mb-0">
      <Image
        src={"/women.jpg"}
        alt="img"
        width={350}
        height={400}
        className="z-50"
      />

      <div className=" p-3 lg:p-10 flex flex-col justify-start lg:justify-center items-start gap-2 z-50 w-full md:w-1/2">
        <h2 className="text-xl text-slate-500">WOMEN</h2>
        <h1 className="text-4xl font-semibold">Spring Summer Collection</h1>
        <p className="text-lg text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus,
          eu convallis turpis convallis et. Pellentesque.
        </p>
        <Link
          href={"/women"}
          className="btn bg-black text-slate-50 hover:text-slate-600 rounded-none"
        >
          See Whole Collection
        </Link>
      </div>
    </div>
  );
}
