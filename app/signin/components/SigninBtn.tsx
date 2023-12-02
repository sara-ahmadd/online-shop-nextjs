"use client";
import React from "react";

export default function SigninBtn({
  val,
  action,
}: {
  val: string;
  action: () => void;
}) {
  return (
    <button onClick={action} className="btn btn-accent">
      Signin with {val}
    </button>
  );
}
