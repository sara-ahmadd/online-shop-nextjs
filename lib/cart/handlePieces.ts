import { ProductType, UserType } from "@/types";
import { getUserData } from "../user/getUser";
import { updateUserData } from "../user/updateUser";
import { deleteProductFromCart } from "./deleteItemFromCart";
import { addProduct } from "./addProduct";

export const handlePieces = async (
  p: ProductType,
  u: UserType,
  sign: string
) => {
  if (p && u) {
    const user = await getUserData(u.email ?? "");
    const cart = user?.cart ?? [];
    const cartCopy = cart.slice();
    const productFromCart = cart.find((i) => i._id === p._id);

    if (productFromCart) {
      const productIndex = cart.findIndex((i) => i._id === p._id);
      if (sign === "-") {
        if ((productFromCart.quantity as number) - 1 > 0) {
          cartCopy.splice(productIndex, 1, {
            ...p,
            quantity: (productFromCart.quantity as number) - 1,
          });

          await updateUserData({ ...user, cart: cartCopy });
          return cartCopy;
        } else {
          await deleteProductFromCart(p, user);
        }
      } else if (sign === "+") {
        await addProduct(user, p);
      }
    }
  }
};
