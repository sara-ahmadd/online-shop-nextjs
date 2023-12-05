"use client";
import React, { useState } from "react";

export default function SubscribeSection() {
  const [val, setVal] = useState("");
  return (
    <div className="px-7 h-96 my-5 w-full flex flex-col justify-center items-center gap-2  bg-teal-300">
      <h2 className="text-4xl font-bold">
        Subscribe To Get Offers In Your Inbox
      </h2>
      <p className="text-lg text-slate-500">
        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
      </p>
      <form className="mx-auto flex w-fit jusitfy-center items-center flex-wrap gap-4">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="input p-5"
          placeholder="Your Email..."
        />
        <button type="submit" className="btn bg-black text-slate-50">
          Subscribe
        </button>
      </form>
    </div>
  );
}
