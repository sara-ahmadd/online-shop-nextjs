import { ProductType, UserType } from "@/types";
import { updateUserData } from "../user/updateUser";
import { getUserData } from "../user/getUser";

export const deleteProductFromCart = async (p: ProductType, u: UserType) => {
  const res = await getUserData(u.email ?? "");
  if (res) {
    const newCart = res?.cart?.filter((i) => i._id !== p._id) ?? [];
    const updatedU = await updateUserData({ ...res, cart: newCart });
    return newCart;
  }
};
