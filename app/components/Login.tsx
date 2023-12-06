"use client";
import { initUser } from "@/app/components/Navbar";
import { themeContext } from "@/app/context/Theme";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { theme } = useContext(themeContext);
  const [form, setForm] = useState(initUser);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      email: form.email,
      password: form.password,
      name: form.name,
      redirect: false,
    })
      .then(() => {
        toast.success("User logged in successfully!");
      })
      .catch((error) => {
        toast.error(`Error on signin with email & password => ${error}`);
      });
    setForm(initUser);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full h-full pt-5 flex flex-wrap justify-center items-center gap-7 pb-10 relative">
      <button onClick={() => signIn("google")}>Sign in with Google</button>
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
        <button className="btn btn-accent">Login</button>
      </form>
    </div>
  );
};

export default Login;
