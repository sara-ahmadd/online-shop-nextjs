import { ProductType, UserType } from "@/types";
import { updateUserData } from "../user/updateUser";
import { use } from "react";
import { getUserData } from "../user/getUser";

export const addProduct = async (user: UserType, product: ProductType) => {
  const res = await getUserData(user.email ?? "");
  const findProduct = res.cart?.find((p) => p._id === product._id);

  if (findProduct !== undefined) {
    res.cart?.splice(res.cart.indexOf(findProduct), 1);
    const finalCart = [
      ...(res.cart ?? []),
      {
        ...findProduct,
        quantity: (findProduct.quantity || 0) + 1,
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
