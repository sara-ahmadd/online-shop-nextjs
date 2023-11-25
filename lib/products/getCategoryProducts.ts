import { ProductType } from "@/types";

export const getCategoryProducts = async (
  cat: string
): Promise<ProductType[]> => {
  try {
    if (cat.length > 0) {
      const res = await fetch(
        `http://localhost:3000/api/products?category=${cat}`
      );
      const data: ProductType[] = await res.json();
      return data;
    } else {
      const res = await fetch(`http://localhost:3000/api/products`);
      const data: ProductType[] = await res.json();
      return data;
    }
  } catch (error) {
    throw new Error(`Error on fetching category products: ${error}`);
  }
};
