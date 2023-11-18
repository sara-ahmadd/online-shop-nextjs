"use client";
import React, { useContext } from "react";
import { themeContext } from "./../context/Theme";
import Row from "./Row";
import AddNewForm from "./AddNewForm";

export default function DashBoard() {
  const { theme } = useContext(themeContext);
  const initialForm = {
    title: "",
    category: "",
    image: "",
    price: 0,
    description: "",
    new: false,
  };
  return (
    <>
      <div className="flex flex-col justify-between items-center py-5">
        <h1 className="font-bold text-2xl">Add A New Product</h1>
        <AddNewForm initialForm={initialForm} />
      </div>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          <thead>
            <tr className={theme ? "text-white" : "text-black"}>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category</th>
              <th>Settings</th>
            </tr>
          </thead>
          <tbody>
            <Row />
          </tbody>
        </table>
      </div>
    </>
  );
}
