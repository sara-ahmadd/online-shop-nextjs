import { ProductType } from "@/types";

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data: ProductType[] = await res.json();
  return data.map((x) => x.category);
};
