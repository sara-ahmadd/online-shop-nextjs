import { ProductType } from "@/types";

const url = "http://localhost:3000/api/products";
export const addNewProduct = async (
  inputData: ProductType
): Promise<ProductType> => {
  try {
    const res = await fetch(url, {
      method: "POST",
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