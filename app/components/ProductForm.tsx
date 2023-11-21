"use client";
import React, { useState, FormEvent, useContext, ChangeEvent } from "react";
import { themeContext } from "../context/Theme";
import { ProductType } from "@/types";
import { useRouter } from "next/navigation";
const emptyForm = {
  title: "",
  category: "",
  image: "",
  price: 0,
  description: "",
  newProduct: false,
};
export default function AddProductForm({
  initialForm,
  functionality,
}: {
  initialForm: ProductType;
  functionality: (f: ProductType) => Promise<ProductType>;
}) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    functionality(form);
    setForm(emptyForm);
    router.refresh();
  };
  const { theme } = useContext(themeContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-start p-5"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        required
        name="title"
        value={form.title}
        placeholder="Products Name"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        onChange={handleChange}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        required
        name="image"
        value={form.image}
        placeholder="Products Image"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        onChange={handleChange}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        required
        name="category"
        value={form.category}
        placeholder="Products Category"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        onChange={handleChange}
      />
      <label htmlFor="newProduct">New</label>
      <input
        type="checkbox"
        id="newProduct"
        name="newProduct"
        className={`${theme && "text-black"} p-4 border rounded w-fit mb-3`}
        onChange={(e) =>
          e.target.checked
            ? setForm({ ...form, newProduct: true })
            : setForm({ ...form, newProduct: false })
        }
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        required
        name="price"
        value={form.price}
        placeholder="Products Price"
        className={`${theme && "text-black"} p-4 border rounded w-full mb-3`}
        onChange={handleChange}
      />
      <label htmlFor="description" className="p-0">
        Description
      </label>
      <textarea
        placeholder="Description"
        required
        id="description"
        value={form.description}
        className={`${theme && "text-black"} border rounded p-4 w-full`}
        onChange={(e) => setForm({ ...form, [e.target.id]: e.target.value })}
      />
      <button className="btn btn-outline btn-accent mt-3">Submit</button>
    </form>
  );
}
