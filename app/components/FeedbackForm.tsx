"use client";
import React, { useState, FormEvent, useContext, useEffect } from "react";
import { themeContext } from "../context/Theme";
import { redirect, useRouter } from "next/navigation";
import { addNewFeedback } from "@/lib/feedbacks/addNewFeedback";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { RefreshContext } from "../context/RefreshContext";

export default function FeedbackForm() {
  const { handleRefresh } = useContext(RefreshContext);
  const [message, setMsg] = useState("");
  const { theme } = useContext(themeContext);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (session?.user?.image && session.user.email) {
      await addNewFeedback({
        msg: message,
        img: session?.user?.image ?? "/vercel.svg",
        email: session?.user?.email,
      });
      toast.success("Thanks for your feedback❤");
      handleRefresh();
      setMsg("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-start py-5 pr-3"
    >
      <label htmlFor="message" className="p-0">
        Review
      </label>
      <textarea
        placeholder="Your Review"
        required
        id="msg"
        value={message}
        className={`${theme && "text-black"} border rounded p-4 w-full`}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn btn-outline btn-accent mt-3">Submit</button>
    </form>
  );
}
