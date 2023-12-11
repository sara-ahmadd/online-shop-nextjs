import { ProductType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data: ProductType[] = await res.json();
  return data.map((x) => x.category);
};
