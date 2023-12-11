import { ProductType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_HOST
    : process.env.PROD_HOST;
export const getFilteredProducts = async (
  search: string = ""
): Promise<ProductType[]> => {
  const url =
    search.length > 0
      ? `${baseUrl}/api/products?search=${search}`
      : `${baseUrl}/api/products`;

  const res = await fetch(url);
  if (!res) {
    throw new Error("Response error in getting search value.");
  }
  const data = await res.json();
  return data;
};
