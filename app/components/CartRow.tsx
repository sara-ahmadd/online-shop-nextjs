// import { useContext } from "react";
// import Button from "../../components/Button";
// import { useGetUser } from "../../Hooks/useGetUser";
// import { UserContext } from "../../context/UserContext";
// import { CartContext } from "../../context/CartContext";
// import { UsersDatabaseContext } from "../../context/UsersDatabaseContext";
// import { Product } from "../../Hooks/useProducts";
// import { removeItem } from "../../functions/removeItemFromCart";
// import Increment_Decremetn_Btn from "../../components/Increment_Decremetn_Btn";
// import managePieces from "../../functions/handlePiecesQuantity";

// function Row({ item }: { item: Product }) {
//   const { user } = useContext(UserContext);
//   const { updateCart } = useContext(CartContext);
//   const { UpdateUsersDB } = useContext(UsersDatabaseContext);
//   const currUser = useGetUser(user.email, user.password);

//   return (
//     <tr className="p-0 border-b-2 border-sky-500 pb-5">
//       <td>{item.id}</td>
//       <td className="w-20 h-20 p-0">
//         <img src={item.image} className="w-full h-full p-2 object-contain" />
//       </td>
//       <td>{item.title}</td>
//       <td className=" w-20 p-0">
//         <div className="flex w-full justify-between items-center p-0">
//           <Increment_Decremetn_Btn
//             sign="+"
//             action={() => {
//               managePieces(
//                 item.title ?? "",
//                 "+",
//                 currUser,
//                 updateCart,
//                 UpdateUsersDB
//               );
//             }}
//           />
//           {item.amount}
//           <Increment_Decremetn_Btn
//             sign="-"
//             action={() => {
//               managePieces(
//                 item.title ?? "",
//                 "-",
//                 currUser,
//                 updateCart,
//                 UpdateUsersDB
//               );
//             }}
//           />
//         </div>
//       </td>
//       <td>{item.price}</td>
//       <td>
//         <Button
//           action={() =>
//             removeItem(item.title || "", currUser, updateCart, UpdateUsersDB)
//           }
//           text="Remove"
//         />
//       </td>
//     </tr>
//   );
// }

// export default Row;
