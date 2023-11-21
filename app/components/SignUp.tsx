"use client";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { themeContext } from "../context/Theme";
const initUser = {
  email: "",
  password: "",
  name: "",
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
      className={`flex flex-col justify-center items-center gap-4 w-full p-4 ${
        theme && "text-black"
      }`}
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
      <button className="btn btn-accent">Submit</button>
    </form>
  );
}
