import { ProductType, UserType } from "@/types";
import { updateUserData } from "../user/updateUser";
import { use } from "react";
import { getUserData } from "../user/getUser";

export const addProduct = async (user: UserType, product: ProductType) => {
  const res = await getUserData(user.email ?? "");
  const matchedProduct = res.cart?.find((p) => p._id === product._id);

  if (matchedProduct !== undefined) {
    const newCart = res.cart?.filter((p) => p._id !== product._id);
    const finalCart = [
      ...(newCart ?? []),
      {
        ...matchedProduct,
        quantity: (matchedProduct.quantity || 0) + 1,
      },
    ];
    const u = { ...res, cart: finalCart };
    const updatedUser = await updateUserData(u);
    return updatedUser;
  } else {
    const updatedCart = [...(res.cart ?? []), { ...product, quantity: 1 }];
    const u = { ...res, cart: updatedCart };
    const updatedUser = await updateUserData(u);
    console.log(updatedUser);
    return updatedUser;
  }
};
