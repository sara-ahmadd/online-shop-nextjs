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
    const cartCopy = cart.slice();
    const productIndex = cart.findIndex((i) => i._id === p._id);
    if (sign === "-") {
      if ((p.quantity as number) - 1 > 0) {
        console.log(
          cartCopy.splice(productIndex, 1, {
            ...p,
            quantity: (p.quantity as number) - 1,
          })
        );
        await updateUserData({ ...user, cart: cartCopy });
        return cartCopy;
      } else {
        await deleteProductFromCart(p, user);
      }
    } else if (sign === "+") {
      cartCopy.splice(productIndex, 1, {
        ...p,
        quantity: (p.quantity as number) + 1,
      });
      await updateUserData({ ...user, cart: cartCopy });
      return cartCopy;
    }
  }
};
