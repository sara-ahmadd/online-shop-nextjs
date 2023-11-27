import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col justify-start gap-4 items-center min-h-screen w-11/12 py-5">
      <div className="grid w-11/12">
        {[1, 2, 3, 4].map((i) => {
          return <div key={i} className={`img img${i}`}></div>;
        })}
        <div className="img5 flex justify-center items-center">
          <Link id="buttn" className="btn btn-accent" href={"#products"}>
            products
          </Link>
        </div>
        {[6, 7].map((i) => {
          return <div key={i} className={`img img${i}`}></div>;
        })}
      </div>
    </div>
  );
}
