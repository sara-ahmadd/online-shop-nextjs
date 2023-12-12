import { ProductType } from "@/types";
import { baseUrl } from "../baseURL";

const url = `${baseUrl}/api/products`;
export const deleteProduct = async (
  inputData: ProductType
): Promise<ProductType> => {
  try {
    const res = await fetch(`${url}?id=${inputData._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in adding new product to the url (${url}).`);
  }
};
