import { ProductType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
const url = `${baseUrl}/api/products`;
export const updateProduct = async (
  inputData: ProductType
): Promise<ProductType> => {
  try {
    const res = await fetch(`${url}?id=${inputData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ ...inputData, _id: inputData._id }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in editing the product => (${url}).`);
  }
};
