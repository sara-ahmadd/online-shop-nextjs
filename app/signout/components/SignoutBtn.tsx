"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function SignOutBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        signOut({ redirect: false }).then(() => router.push("/signin"))
      }
    >
      Signout
    </button>
  );
}

export default SignOutBtn;
