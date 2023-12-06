import React from "react";
import SignUP from "../components/SignUp";
// import signUpImage from "/sign-up.svg";
import Image from "next/image";
function SignupPage() {
  return (
    <div className="w-full h-full pt-5 flex flex-wrap justify-center items-center gap-7 pb-10 relative">
      <SignUP />
    </div>
  );
}

export default SignupPage;
