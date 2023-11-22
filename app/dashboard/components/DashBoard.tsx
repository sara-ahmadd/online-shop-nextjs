"use client";
import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../context/Theme";
import Row from "../../components/Row";
import AddNewForm from "../../components/ProductForm";
import { addNewProduct } from "@/lib/addNewProduct";
import { ProductType } from "@/types";
import { initProduct } from "@/app/components/ProductDetails";
import { SearchContext } from "@/app/context/Search";
import { getFilteredProducts } from "@/lib/getFilteredProducts";
import { IoClose } from "react-icons/io5";

export default function DashBoard() {
  const { theme } = useContext(themeContext);
  const [products, setProducts] = useState([initProduct]);
  const [displayForm, setDisplayForm] = useState(false);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    const getData = async () => {
      const data: ProductType[] = await getFilteredProducts(search);
      setProducts(data);
    };
    getData();
  }, [search]);
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
    <div>
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
        <table className=" table-xs sm:table-lg">
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
              products.map((p, index) => {
                return <Row key={p._id} product={p} order={index} />;
              })
            ) : (
              <h1>No Products to display</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
