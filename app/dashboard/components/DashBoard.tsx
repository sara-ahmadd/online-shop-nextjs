"use client";
import React, { useContext } from "react";
import { themeContext } from "../../context/Theme";
import Row from "../../components/Row";
import AddNewForm from "../../components/ProductForm";
import { addNewProduct } from "@/lib/addNewProduct";
import { ProductType } from "@/types";

export default function DashBoard({ products }: { products: ProductType[] }) {
  const { theme } = useContext(themeContext);
  const initialForm = {
    title: "",
    category: "",
    image: "",
    price: 0,
    description: "",
    newProduct: false,
  };
  const addProduct = async (form: ProductType): Promise<ProductType> => {
    const data = await addNewProduct(form);
    return data;
  };
  return (
    <>
      <div className="flex flex-col justify-between items-center py-5">
        <h1 className="font-bold text-2xl">Add A New Product</h1>
        <AddNewForm initialForm={initialForm} functionality={addProduct} />
      </div>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          <thead>
            <tr className={theme ? "text-white" : "text-black"}>
              <th></th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category</th>
              <th>Settings</th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 ? (
              products.map((p, index) => (
                <Row key={p._id} product={p} order={index} />
              ))
            ) : (
              <h1>No Products to display</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
