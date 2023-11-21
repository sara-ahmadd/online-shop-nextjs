import { ProductType } from "@/types";

const url = "http://localhost:3000/api/products";
export const getProduct = async (id: string): Promise<ProductType> => {
  try {
    const res = await fetch(url + `?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-allow-Origin": "*",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(
      `Error in fetching product from the url:(${url}?id=${id})==>${error}.`
    );
  }
};
