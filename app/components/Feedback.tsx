"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import { FaUser } from "react-icons/fa";
import { getAllFeedbacks } from "@/lib/feedbacks/getFeedbacks";
import { FeedType } from "@/types";
import { useRouter } from "next/navigation";
import { RefreshContext } from "../context/RefreshContext";

const initFeed: FeedType = {
  msg: "",
  email: "",
  img: "",
};
export default function Feedback() {
  const [feed, setFeed] = useState([initFeed]);
  const { refresh } = useContext(RefreshContext);
  useEffect(() => {
    (async () => {
      const res: FeedType[] = await getAllFeedbacks();
      setFeed(res.reverse());
    })();
  }, [refresh]);
  return (
    <div className="w-full sm:w-4/5 text-center px-2">
      <>
        {feed?.length > 0 && feed.every((f) => f.msg !== "") && (
          <>
            <h1 className="font-bold text-2xl py-10">
              Our Clients Thoughts About Us
            </h1>
            <div className="h-80 overflow-y-scroll">
              {feed.map((f) => {
                return (
                  <div
                    key={f._id}
                    className=" flex flex-col justify-center items-start p-3"
                  >
                    <div className="flex gap-2 items-center">
                      {f.img ? (
                        <Image
                          src={f.img}
                          alt={f.email}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <FaUser />
                      )}
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
