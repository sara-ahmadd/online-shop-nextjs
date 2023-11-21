// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// function TableFooter() {
//   const { cart } = useContext(CartContext);
//   const getTotalPieces = () => {
//     let sum = 0;
//     cart?.forEach((x) => (sum += x.amount ?? 0));
//     return sum;
//   };

//   const getTotalCost = () => {
//     let cost = 0;
//     cart?.forEach((x) => (cost += (x.amount || 0) * (x.price || 0)));
//     return cost.toFixed(2);
//   };
//   return (
//     <tfoot>
//       <tr className="border-2 border-sky-500 p-0 font-bold text-lg">
//         <td colSpan={3}>
//           <h2 className="p-0">
//             <span className="p-0">Total Cost : $</span>
//             <span className="text-md font-medium p-0">{getTotalCost()}</span>
//           </h2>
//         </td>
//         <td colSpan={2}>
//           <h2 className="p-0">
//             <span className="p-0">Quantity : </span>
//             <span className="text-md font-medium p-0">{getTotalPieces()}</span>
//           </h2>
//         </td>
//       </tr>
//     </tfoot>
//   );
// }

// export default TableFooter;
