"use client";
import { getUserData } from "@/lib/user/getUser";
import { updateUserData } from "@/lib/user/updateUser";
import { UserType } from "@/types";
import { genSalt, hash } from "bcrypt-ts";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { themeContext } from "../context/Theme";

export default function Example() {
  const [showPassw, setShowPassw] = useState(false);

  const { theme } = useContext(themeContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    password: string;
    email: string;
  }>({
    defaultValues: { password: "", email: "" },
  });
  const updatePassword = async (email: string, passw: string) => {
    const user: UserType = await getUserData(email);
    if (user) {
      const salt = await genSalt(10);
      const hashedPassword = await hash(passw, salt);
      const newU = { ...user, password: hashedPassword };
      await updateUserData(newU).then((res) => {
        console.log(res);
        toast.success("Password is changed successfully✔");
      });
    } else {
      toast.error("User doesnot exist");
    }
  };

  const processSubmit: SubmitHandler<{
    password: string;
    email: string;
  }> = async (data) => {
    const user: UserType = await getUserData(data.email);
    if (user) {
      const salt = await genSalt(10);
      const hashedPassword = await hash(data.password, salt);
      const newU = { ...user, password: hashedPassword };
      await updateUserData(newU).then((res) => {
        router.push("/signin");
        toast.success("Password is changed successfully✔");
      });
    } else {
      toast.error("User doesnot exist");
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(processSubmit)}>
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
                  placeholder="Your email..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Passowrd
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters.",
                    },
                  })}
                  type={showPassw ? "text" : "password"}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3"
                />
                {errors.password?.message && (
                  <p className="text-sm font-bold text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
