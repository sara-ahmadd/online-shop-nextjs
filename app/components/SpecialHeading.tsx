import React from "react";

export default function SpecialHeading({
  text_1,
  text_2,
}: {
  text_1: string;
  text_2: string;
}) {
  return (
    <div className="flex flex-col w-fit mx-auto px-4 justify-center items-center h-28 border-b-2 border-slate-600 pb-3 sm:pb-1">
      <h2 className="text-xl text-slate-400">{text_1}</h2>
      <h1 className=" text-5xl font-semibold">{text_2}</h1>
    </div>
  );
}
