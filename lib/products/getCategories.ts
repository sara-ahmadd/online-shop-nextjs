import { ProductType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_HOST
    : process.env.PROD_HOST;
export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data: ProductType[] = await res.json();
  return data.map((x) => x.category);
};
