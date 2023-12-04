import Link from "next/link";
import React from "react";

export default function NewCollectionSection() {
  return (
    <div className="new_collection  ">
      <div className="p-10 flex flex-col justify-center items-center gap-2 bg-teal-400/20 w-full h-full">
        <h2 className="text-xl text-slate-500">NEW COLLECTION</h2>
        <h1 className="text-4xl font-semibold">
          Be different in your own way!
        </h1>
        <h1 className="text-2xl font-semibold">Find your unique style.</h1>
        <Link
          href={"/new"}
          className="btn bg-black text-slate-50 hover:text-slate-600 rounded-none"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  );
}
