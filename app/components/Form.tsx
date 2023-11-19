"use client";
import React, { useState, FormEvent, useContext, ChangeEvent } from "react";
import { themeContext } from "./../context/Theme";

export default function FeedbackForm() {
  const initialForm = {
    email: "",
    msg: "",
  };
  const [form, setForm] = useState(initialForm);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const { theme } = useContext(themeContext);

  return (
    <form className="w-full flex flex-col justify-center items-start py-5 pr-3">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        required
        name="email"
        value={form.email}
        placeholder="Your Email"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        onChange={handleChange}
      />
      <label htmlFor="message" className="p-0">
        Review
      </label>
      <textarea
        placeholder="Your Review"
        required
        id="msg"
        value={form.msg}
        className={`${theme && "text-black"} border rounded p-4 w-full`}
        onChange={(e) => setForm({ ...form, [e.target.id]: e.target.value })}
      />
      <button className="btn btn-outline btn-accent mt-3">Submit</button>
    </form>
  );
}
