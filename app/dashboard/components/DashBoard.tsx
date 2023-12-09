"use client";
import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../context/Theme";
import Row from "../../components/Row";
import AddNewForm from "../../components/ProductForm";
import { addNewProduct } from "@/lib/products/addNewProduct";
import { ProductType } from "@/types";
import { IoClose } from "react-icons/io5";
import FilterCategories from "@/app/components/FilterCategories";
import Searchbar from "@/app/components/Searchbar";
import useGetSearchedProducts from "@/hooks/useGetSearchedProducts";
import Image from "next/image";
import { RefreshContext } from "@/app/context/RefreshContext";

export default function DashBoard() {
  const { theme } = useContext(themeContext);
  const [displayForm, setDisplayForm] = useState(false);

  const { products, handleProducts, search, handleSearch } =
    useGetSearchedProducts();

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
    setDisplayForm(false);
    return data;
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <div className="w-full flex flex-col justify-center items-start gap-4 p-4">
        <Searchbar search={search} handleSearch={handleSearch} />
        <FilterCategories handleProducts={handleProducts} />
      </div>
      <div className="flex flex-col justify-between items-center w-11/12 py-5">
        <button
          onClick={() => setDisplayForm(!displayForm)}
          className="btn btn-outline btn-accent font-bold text-2xl"
        >
          {displayForm ? <IoClose /> : "Add A New Product"}
        </button>
        {displayForm ? (
          <AddNewForm initialForm={initialForm} functionality={addProduct} />
        ) : null}
      </div>
      <div className="overflow-x-auto min-h-screen">
        <table className=" table-xs sm:table-lg h-full">
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
            {products &&
            products.length > 0 &&
            products.every((p) => p.title !== "") ? (
              products.map((p, index) => {
                return <Row key={p._id} product={p} order={index} />;
              })
            ) : (
              <tr>
                <td colSpan={6}>
                  <Image
                    src={"/spinner.gif"}
                    alt="spinner"
                    width={300}
                    height={300}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
