import { ProductType } from "@/types";

const url = "http://localhost:3000/api/products";
export const updateProduct = async (inputData: ProductType) => {
  try {
    const res = await fetch(`${url}?id=${inputData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(inputData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in adding new product to the url (${url}).`);
  }
};
