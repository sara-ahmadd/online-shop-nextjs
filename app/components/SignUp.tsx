"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { themeContext } from "../context/Theme";
import { UserType } from "@/types";
import { addUser } from "@/lib/user/addNewUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const initUser: UserType = {
  email: "",
  password: "",
  name: "",
  image: "",
  cart: [],
};

export default function SignUP() {
  const { theme } = useContext(themeContext);
  // const router = useRouter();
  const [form, setForm] = useState(initUser);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addUser(form)
      .then(() => {
        toast.success("User has been registered");
      })
      .catch((err) => toast.error(`Somthing went wrong: ${err}`));
    setForm(initUser);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex flex-col justify-center items-center gap-4 w-4/5 sm:w-1/2 p-2 sm:p-10 ${
        theme && "text-black"
      } rounded-md shadow-xl bg-slate-200/20 backdrop-blur-sm border-2 border-teal-500 px-5 absolute top-1/3 left-1/3 md:static`}
    >
      <input
        required
        name="name"
        value={form.name as string}
        onChange={handleChange}
        type="text"
        placeholder="User Name"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="email"
        value={form.email as string}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="password"
        value={form.password as string}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="image"
        value={form.image as string}
        onChange={handleChange}
        type="text"
        placeholder="Image URL"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <button className="btn btn-accent">Register</button>
    </form>
  );
}
