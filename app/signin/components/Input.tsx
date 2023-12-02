"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

function Input() {
  const [val, setVal] = useState("");
  return (
    <form
      className="w-44"
      onSubmit={(e) => {
        signIn("email", { email: val });
      }}
    >
      <input
        type="email"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button className="btn btn-accent">Signin with email</button>
    </form>
  );
}

export default Input;
