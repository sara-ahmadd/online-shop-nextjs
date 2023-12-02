import { signOut } from "next-auth/react";
import React from "react";
import SignOutBtn from "./components/SignoutBtn";

function SignOutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>SignOut!</h1>
      <SignOutBtn />
    </div>
  );
}

export default SignOutPage;
