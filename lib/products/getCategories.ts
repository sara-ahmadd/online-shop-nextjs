import { ProductType } from "@/types";
import { baseUrl } from "../baseURL";

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data: ProductType[] = await res.json();
  return data.map((x) => x.category);
};
