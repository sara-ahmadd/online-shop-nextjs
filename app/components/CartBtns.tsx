// import Swal from "sweetalert2";
// import Button from "../../components/Button";
// import withReactContent from "sweetalert2-react-content";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
// import { CartContext } from "../../context/CartContext";
// import { UsersDatabaseContext } from "../../context/UsersDatabaseContext";
// import { useGetUser } from "../../Hooks/useGetUser";

// const MySwal = withReactContent(Swal);
// function CartBtns() {
//   const { user } = useContext(UserContext);
//   const currUser = useGetUser(user.email, user.password);

//   const { cart, updateCart } = useContext(CartContext);
//   const { UpdateUsersDB } = useContext(UsersDatabaseContext);
//   return (
//     <div className="flex w-full h-fit justify-between items-center">
//       {cart?.length > 0 && (
//         <>
//           <Button
//             text="Clear Cart"
//             action={() => {
//               updateCart([]);
//               UpdateUsersDB({ ...currUser, cart: [] });
//             }}
//           />
//           <Button
//             text="Confirm"
//             action={() => {
//               MySwal.fire({
//                 title: "Shipping your order...",
//                 confirmButtonText: "Ok",
//               }).then(() => {
//                 if (confirm("confirm?")) {
//                   updateCart([]);
//                   UpdateUsersDB({ ...currUser, cart: [] });
//                 }
//               });
//             }}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default CartBtns;
