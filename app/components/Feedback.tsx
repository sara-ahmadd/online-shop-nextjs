"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FeedbackForm from './Form.tsx'
import { FaUser } from "react-icons/fa";
type FeedType = {
  id: string;
  title: string;
  email: string;
  image?: string;
};

const feeds: FeedType[] = [
  {
    id: "22",
    title: "Amazing site!",
    email: "example@example.com",
    image: FaUser,
  },
  {
    id: "23",
    title: "cool",
    email: "example@example.com",
    image: FaUser,
  },
];
const initFeed: FeedType = {
  id: "",
  title: "",
  email: "",
};
export default function Feedback() {
  const [feed, setFeed] = useState([initFeed]);
  useEffect(() => {
    setFeed(feeds);
  }, []);
  return (
    <div className='container w-4/5 text-center'>
    <h1 className='font-bold text-2xl'>
      Our Clients Thoughts About Us
    </h1>
      <>
        {feed.map((f) => {
          return (
            <div
              key={f.id}
              className=" flex flex-col justify-center items-start p-3"
            >
              <div className="flex gap-2 items-center">
                <FaUser />
                <h1>{f.email}</h1>
              </div>
              <p className='border rounded w-full p-4 text-start'>{f.title}</p>
            </div>
          );
        })}
      </>
    <div className='w-full flex flex-col justify-center items-start py-5'>
      <h1 className='font-bold text-2xl w-full'>What do you think about us?</h1>
      <FeedbackForm />
    </div>
    </div>
  );
}
