"use client";
import React, { useContext, ChangeEvent } from "react";
import { themeContext } from "../context/Theme";
import { ProductType } from "@/types";
import { RefreshContext } from "../context/RefreshContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function AddProductForm({
  initialForm,
  functionality,
}: {
  initialForm: ProductType;
  functionality: (f: ProductType) => Promise<ProductType>;
}) {
  const { register, handleSubmit, setValue } = useForm<ProductType>({
    defaultValues: initialForm,
  });
  const router = useRouter();
  const { theme } = useContext(themeContext);
  const { handleRefresh } = useContext(RefreshContext);

  const processSubmit: SubmitHandler<ProductType> = (data) => {
    functionality(data).then(() => {
      handleRefresh();
      router.push("/dashboard");
    });
  };
  return (
    <form
      onSubmit={handleSubmit(processSubmit)}
      className="w-full flex flex-col justify-center items-start p-5"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        required
        placeholder="Products Name"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        {...register("title")}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        required
        placeholder="Products Image"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        {...register("image")}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        required
        placeholder="Products Category"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        {...register("category")}
      />
      <label htmlFor="sale">Have sale?</label>
      <input
        type="number"
        id="sale"
        placeholder="Type a number"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        {...register("sale")}
      />
      <label htmlFor="newProduct">New</label>
      <input
        type="checkbox"
        id="newProduct"
        className={`${theme && "text-black"} p-4 border rounded w-fit mb-3`}
        {...register("newProduct", {
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            setValue("newProduct", e.target.checked ? true : false);
          },
        })}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        required
        placeholder="Products Price"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        {...register("price")}
      />
      <label htmlFor="description" className="p-0">
        Description
      </label>
      <textarea
        placeholder="Description"
        required
        className={`${theme && "text-black"} border rounded p-4 w-full`}
        {...register("description")}
      />
      <button className="btn btn-outline btn-accent mt-3">Submit</button>
    </form>
  );
}
