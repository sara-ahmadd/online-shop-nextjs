"use client";
import React, { useContext } from "react";
import { themeContext } from "../context/Theme";
import { UserType } from "@/types";
import { addUser } from "@/lib/user/addNewUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
const initUser: UserType = {
  email: "",
  password: "",
  name: "",
  image: "",
  cart: [],
};

export default function SignUP() {
  const { register, handleSubmit } = useForm<UserType>({
    defaultValues: initUser,
  });
  const { theme } = useContext(themeContext);
  const router = useRouter();

  const processSubmit: SubmitHandler<UserType> = async (data) => {
    await addUser(data)
      .then(() => {
        toast.success("User has been registered");
        router.push("/signin");
      })
      .catch((err) => toast.error(`Somthing went wrong: ${err}`));
  };

  return (
    <div
      className={` flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          className={`${
            theme ? "text-white" : "text-black"
          } mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900`}
        >
          Register
        </h2>
      </div>

      <div
        className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <form className="space-y-6" onSubmit={handleSubmit(processSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2 p-3">
              <input
                {...register("name")}
                id="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2 p-3">
              <input
                {...register("email")}
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 p-3">
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters.",
                  },
                })}
                id="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profile Image URL
              </label>
            </div>
            <div className="mt-2 p-3">
              <input
                {...register("image")}
                id="image"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            href="/signin"
            className="font-semibold leading-6 text-teal-600 hover:text-teal-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
