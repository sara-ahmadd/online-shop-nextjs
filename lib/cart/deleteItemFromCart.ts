import { ProductType } from "@/types";

export const deleteProductFromCart = async (
  cart: ProductType[],
  p: ProductType
) => {
  const newCart = cart.filter((i) => i._id !== p._id);
  return newCart;
};
