import { ProductType } from "@/types";

export const getFilteredProducts = async (
  search: string = ""
): Promise<ProductType[]> => {
  const url =
    search.length > 0
      ? `http://localhost:3000/api/products?search=${search}`
      : `http://localhost:3000/api/products`;

  const res = await fetch(url);
  if (!res) {
    throw new Error("Response error in getting search value.");
  }
  const data = await res.json();
  return data;
};
