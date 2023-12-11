import { ProductType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
export const getCategoryProducts = async (
  cat: string
): Promise<ProductType[]> => {
  try {
    if (cat.length > 0) {
      const res = await fetch(`${baseUrl}/api/products?category=${cat}`);
      const data: ProductType[] = await res.json();
      return data;
    } else {
      const res = await fetch(`${baseUrl}/api/products`);
      const data: ProductType[] = await res.json();
      return data;
    }
  } catch (error) {
    throw new Error(`Error on fetching category products: ${error}`);
  }
};
