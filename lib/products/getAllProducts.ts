import { ProductType } from "@/types";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_HOST
    : process.env.PROD_HOST;
const url = `${baseUrl}/api/products`;
export const getAllProducts = async (): Promise<ProductType[]> => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Error in fetching products from the url:(${url})==>${error}.`
    );
  }
};
