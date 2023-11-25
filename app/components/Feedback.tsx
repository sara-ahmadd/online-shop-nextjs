"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import { FaUser } from "react-icons/fa";
import { getAllFeedbacks } from "@/lib/feedbacks/getFeedbacks";
import { FeedType } from "@/types";
import { useRouter } from "next/navigation";

const initFeed: FeedType = {
  msg: "",
  email: "",
};
export default function Feedback() {
  const router = useRouter();
  const [feed, setFeed] = useState([initFeed]);
  useEffect(() => {
    router.refresh();
    const getFeedbacks = async () => {
      const res: FeedType[] = await getAllFeedbacks();
      setFeed(res);
      return res;
    };
    getFeedbacks();
  }, [router]);
  return (
    <div className="w-full sm:w-4/5 text-center px-2">
      <>
        {feed?.length > 1 && (
          <>
            <h1 className="font-bold text-2xl">
              Our Clients Thoughts About Us
            </h1>
            <div className="h-80 overflow-scroll">
              {feed.map((f) => {
                return (
                  <div
                    key={f._id}
                    className=" flex flex-col justify-center items-start p-3"
                  >
                    <div className="flex gap-2 items-center">
                      <FaUser />
                      <h1>{f.email}</h1>
                    </div>
                    <p className="border rounded w-full p-4 text-start">
                      {f.msg}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
      <div className="w-full flex flex-col justify-center items-start py-5 px-2">
        <h1 className="font-bold text-2xl w-full">
          What do you think about us?
        </h1>
        <FeedbackForm />
      </div>
    </div>
  );
}
