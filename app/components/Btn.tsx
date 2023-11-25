"use client";
import { ProductType } from "@/types";
import React from "react";

export default function Btn({
  handleFunc,
  val,
}: {
  handleFunc: () => Promise<ProductType> | void;
  val: string;
}) {
  return (
    <button className="btn btn-outline btn-accent" onClick={handleFunc}>
      {val}
    </button>
  );
}
