import { ProductType, UserType } from "@/types";
import { updateUserData } from "../user/updateUser";
import { getUserData } from "../user/getUser";

export const addProduct = async (user: UserType, product: ProductType) => {
  const res = await getUserData(user.email ?? "");
  if (product) {
    const productIndex = res?.cart?.findIndex(
      (i) => i._id === product._id
    ) as number;
    const cartCopy = res.cart?.slice();
    if (productIndex !== -1) {
      cartCopy?.splice(productIndex, 1, {
        ...product,
        quantity: (product.quantity || 0) + 1,
      });
    } else {
      cartCopy?.push({ ...product, quantity: 1 });
    }
    const u = { ...res, cart: cartCopy };
    const updatedUser = await updateUserData(u);
    return updatedUser;
  }
  return res;
};
