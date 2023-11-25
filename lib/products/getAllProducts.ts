import { ProductType } from "@/types";

// const baseUrl = process.env.DEV_HOST;
// export default async function getProducts(): Promise<ProductType[]> {
//   const res = await fetch(`${baseUrl}/api/products`, {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     cache: "no-store",
//   });
//   if (res) {
//     console.log(`${res.json()}=========>${res.statusText}`);
//   }
//   const data = await res.json();
//   if (!data) {
//     throw new Error("No DATA");
//   }
//   console.log(data.data);
//   return data.data;
// }

const url = "http://localhost:3000/api/products";
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
