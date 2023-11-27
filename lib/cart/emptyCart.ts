import { ProductType, UserType } from "@/types";
import { getUserData } from "../user/getUser";
import { updateUserData } from "../user/updateUser";

export const emptyCart = async (user: UserType) => {
  const res = await getUserData(user.email ?? "");
  const clearedCart: ProductType[] = [];
  const updatedUser = { ...res, cart: clearedCart };
  const u = await updateUserData(updatedUser);
  return u;
};
