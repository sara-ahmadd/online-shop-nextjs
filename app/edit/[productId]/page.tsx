import React from "react";
import AddNewForm from "./../../components/AddNewForm";
import Link from "next/link";
export default function EditProduct() {
  const initialForm = {
    title: "",
    category: "",
    image: "",
    price: 0,
    description: "",
    new: false,
  };
  return (
    <div className="page flex flex-col justify-center items-center py-5 gap-4">
      <h1 className="font-bold text-2xl">Edit The Requested Product</h1>
      <Link href={"/dashboard"} className="btn btn-accent">
        Back
      </Link>
      <AddNewForm initialForm={initialForm} />
    </div>
  );
}
