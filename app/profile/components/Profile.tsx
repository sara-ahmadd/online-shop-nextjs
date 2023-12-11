"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { UserType } from "@/types";
import { deleteUserData } from "@/lib/user/deleteUser";
import Btn from "@/app/components/Btn";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import { getUserData } from "@/lib/user/getUser";
import { updateUserData } from "@/lib/user/updateUser";
import { FaRegSave, FaUserEdit } from "react-icons/fa";

export default function Profile({ user }: { user: UserType }) {
  const router = useRouter();
  const deleteAccount = async () => {
    if (user) {
      await Swal.fire("Confirm Deleting Your Account", "", "question").then(
        async (res) => {
          if (res.isConfirmed) {
            await signOut();
            await deleteUserData(user._id as string).then(() => {
              router.push("/");
            });
          }
        }
      );
    }
  };
  const [profileImg, setProfileImg] = useState("");
  const [profileName, setProfileName] = useState("");
  const [showImgField, setShowImgField] = useState(false);
  const [showNameField, setShowNameField] = useState(false);
  const updateProfile = async (imgUrl: string, name: string) => {
    if (imgUrl.length > 0) {
      const u = await getUserData(user.email);
      if (u) {
        const newU: UserType = { ...u, image: imgUrl };
        await updateUserData(newU).then((res) => {
          setShowImgField(false);
          router.refresh();
        });
      }
    }
    if (name.length > 0) {
      const u = await getUserData(user.email);
      if (u) {
        const newU: UserType = { ...u, name: name };
        await updateUserData(newU).then((res) => {
          setShowNameField(false);
          router.refresh();
        });
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center p-5 mx-auto gap-4">
      {user ? (
        <>
          <div className="flex   justify-center items-end">
            <Image
              src={user?.image ?? "/spinner.gif"}
              alt={user?.name ?? "User"}
              width={300}
              height={300}
              className=" rounded-full"
            />
            <div className="flex min-w-fit justify-center items-center p-2 gap-3">
              <button
                onClick={() => {
                  setShowImgField(!showImgField);
                }}
              >
                <FaUserEdit className="text-xl" />
              </button>
              <button
                onClick={() => {
                  updateProfile(profileImg, "");
                }}
              >
                <FaRegSave className="text-xl" />
              </button>
            </div>
          </div>
          {showImgField ? (
            <input
              className="input px-3 border-2 border-black rounded-md w-96 h-10"
              type="text"
              placeholder="Your new image URL..."
              value={profileImg}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfileImg(e.target.value);
              }}
            />
          ) : null}
          <div className=" font-bold text-2xl flex  justify-center items-center gap-3">
            <h1>Username : {user?.name ?? "User"}</h1>
            <div className="flex min-w-fit justify-center items-center p-4 gap-3">
              <button
                onClick={() => {
                  setShowNameField(!showNameField);
                }}
              >
                <FaUserEdit className="text-xl" />
              </button>
              <button
                onClick={() => {
                  updateProfile("", profileName);
                }}
              >
                <FaRegSave className="text-xl" />
              </button>
            </div>
          </div>
          {showNameField ? (
            <input
              className="input px-3 border-2 border-black rounded-md w-96 h-10"
              type="text"
              placeholder="Your new username..."
              value={profileName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfileName(e.target.value);
              }}
            />
          ) : null}
          <h1 className="font-bold text-2xl">
            Email : {user?.email ?? "Email"}
          </h1>
          <Btn val={"Delete Account"} handleFunc={deleteAccount} />
        </>
      ) : (
        <h1>Signin!</h1>
      )}
    </div>
  );
}
