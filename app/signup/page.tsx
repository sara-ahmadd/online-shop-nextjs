import React from "react";
import SignUP from "../components/SignUp";
import signUp from "./../../public/sign-up.svg";
import Image from "next/image";
function SignupPage() {
  return (
    <div className="page w-full h-full pt-5 flex flex-wrap justify-center items-center gap-7">
      <Image src={signUp} alt="signUp" width={400} height={400} />
      <SignUP />
    </div>
  );
}

export default SignupPage;
