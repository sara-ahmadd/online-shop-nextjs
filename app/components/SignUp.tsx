"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { themeContext } from "../context/Theme";
import { UserType } from "@/types";
const initUser: UserType = {
  email: "",
  password: "",
  name: "",
  image: "",
  cart: [],
};

export default function SignUP() {
  const { theme } = useContext(themeContext);
  const [form, setForm] = useState(initUser);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
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
      } rounded-md shadow-xl bg-slate-200/20 backdrop-blur-sm border-2 border-teal-500`}
    >
      <input
        required
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="User Name"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="password"
        value={form.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <input
        required
        name="image"
        value={form.image}
        onChange={handleChange}
        type="text"
        placeholder="Image URL"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <button className="btn btn-accent">Register</button>
    </form>
  );
}
