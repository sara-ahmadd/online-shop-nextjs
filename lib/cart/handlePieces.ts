import { ProductType, UserType } from "@/types";
import { getUserData } from "../user/getUser";
import { updateUserData } from "../user/updateUser";
import { deleteProductFromCart } from "./deleteItemFromCart";

export const handlePieces = async (
  p: ProductType,
  u: UserType,
  sign: string
) => {
  const user = await getUserData(u.email ?? "");
  const cart = user?.cart ?? [];
  if (p) {
    cart.splice(cart.indexOf(p), 1);
    if (sign === "-") {
      if ((p.quantity as number) - 1 > 0) {
        const newCart = [
          ...cart,
          { ...p, quantity: (p.quantity as number) - 1 },
        ];
        await updateUserData({ ...user, cart: newCart });
        return newCart;
      } else {
        await deleteProductFromCart(p, user);
      }
    } else if (sign === "+") {
      const newCart = [...cart, { ...p, quantity: (p.quantity as number) + 1 }];
      await updateUserData({ ...user, cart: newCart });
      return newCart;
    }
  }
};
