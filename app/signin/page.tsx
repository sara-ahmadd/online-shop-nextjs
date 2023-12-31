"use client";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { themeContext } from "@/app/context/Theme";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

function LoginPage() {
  const { theme } = useContext(themeContext);
  const [showPassw, setShowPassw] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{
    name: string;
    password: string;
    email: string;
  }>({
    defaultValues: { name: "", password: "", email: "" },
  });
  const router = useRouter();
  const processSubmit: SubmitHandler<{
    name: string;
    password: string;
    email: string;
  }> = (data) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      name: data.name,
      redirect: false,
    })
      .then((res) => {
        if (res?.ok) {
          toast.success("User logged in successfully!");
          reset();
          router.refresh();
        }
        if (res?.error) {
          toast.error(`${res.error}`);
        }
      })
      .catch((error) => {
        toast.error(`Error on signin with email & password => ${error}`);
      });
  };
  return (
    <div
      className={` flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
    >
      <div
        className={`${
          theme ? "text-white" : "text-black"
        } sm:mx-auto sm:w-full sm:max-w-sm`}
      >
        <h2
          className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight  ${
            theme ? "text-white" : "text-black"
          }`}
        >
          Sign in to your account
        </h2>
      </div>

      <div
        className={`${
          theme ? "text-white" : "text-black"
        } mt-10 sm:mx-auto sm:w-full sm:max-w-sm`}
      >
        <form
          className={`space-y-6 ${theme ? "text-white" : "text-black"}`}
          onSubmit={handleSubmit(processSubmit)}
        >
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium leading-6  ${
                theme ? "text-white" : "text-black"
              }`}
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                {...register("name")}
                id="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium leading-6 text-gray-900 ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Email address
            </label>
            <div className={`mt-2 ${theme ? "text-white" : "text-black"}`}>
              <input
                {...register("email")}
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>

          <div>
            <div className={`flex items-center justify-between`}>
              <label
                htmlFor="password"
                className={`block text-sm font-medium leading-6 ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                Password
              </label>
            </div>
            <div
              className={`flex justify-center items-center gap-2 mt-2  ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <input
                {...register("password")}
                id="password"
                type={showPassw ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3"
              />
              {errors.password?.message && (
                <p className="text-sm font-bold text-red-500">
                  {errors.password.message}
                </p>
              )}
              <button
                className="btn bg-teal-600 text-center px-2 text-white font-bold"
                type="button"
                onClick={(e) => {
                  setShowPassw(!showPassw);
                }}
              >
                {showPassw ? <PiEyeLight /> : <PiEyeSlash />}
              </button>
            </div>
            <Link
              href="/forgotpassword"
              className="font-semibold leading-6 text-teal-600 hover:text-teal-500"
            >
              Forgot your password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p
          className={`mt-10 text-center text-sm text-gray-500 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          Not a member?
          <Link
            href="/signup"
            className="font-semibold leading-6 text-teal-600 hover:text-teal-500"
          >
            register now!
          </Link>
        </p>
      </div>
      <h1 className="w-full font-bold text-xl text-center p-2">
        -------OR--------
      </h1>
      <div className="mx-auto w-1/5">
        <button
          onClick={() => signIn("google")}
          className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
