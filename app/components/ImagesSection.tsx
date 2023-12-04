import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImagesSection = ({ gender }: { gender: string }) => {
  return (
    <div className="w-fit h-fit relative">
      <Image
        src={gender === "men" ? "/base-coll.jpg" : "/women-section.jpg"}
        alt="img"
        width={500}
        height={500}
      />
      <Link
        href={gender === "men" ? "/men" : "/women"}
        className="absolute w-10/12 h-14 flex justify-center items-center bottom-3 left-3 bg-slate-100/80 text-black"
      >
        {gender === "men" ? "MEN" : "WOMEN"} Products
      </Link>
    </div>
  );
};

export default ImagesSection;
