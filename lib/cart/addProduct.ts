import { ProductType, UserType } from "@/types";
import { updateUserData } from "../user/updateUser";
import { getUserData } from "../user/getUser";

export const addProduct = async (user: UserType, product: ProductType) => {
  const userFromDB = await getUserData(user.email ?? "");
  const cart = userFromDB.cart;
  let cartCopy = cart?.slice();
  const matchedProduct = cart?.find((p) => p._id === product._id);
  if (matchedProduct) {
    const productIndex = cart?.findIndex(
      (p) => p._id === product._id
    ) as number;

    cartCopy?.splice(productIndex, 1, {
      ...product,
      quantity: (matchedProduct.quantity as number) + 1,
    });
    await updateUserData({ ...userFromDB, cart: cartCopy });
  } else {
    cartCopy?.push({ ...product, quantity: 1 });
    await updateUserData({ ...userFromDB, cart: cartCopy });
  }
};
