// import "./favorite.scss";
// import { useSelector } from "react-redux";

// export const Favorite = () => {
//   const { WISH_LIST_ITEMS } = useSelector((state) => state.wishlist);

//   console.log(WISH_LIST_ITEMS);
//   return (
//     <>
//       <div className="wishlist">
//         <div className="container">
//           <h1 className="title">Wishlist</h1>
//           <div className="items-wrapper">
//             <ul className="wish-box-list">
//               <li>PRODUCT</li>
//               <li>PRICE</li>
//               <li>STOCK STATUS</li>
//             </ul>
//               <hr />
//             {WISH_LIST_ITEMS.map((item) => (
//               <div className="wish-box" key={item.id}>
//                 <div className="img-status">
//                   <img src={item.image} alt="" />
//                   <span>{item.title}</span>
//                 </div>
//                 <div className="price">
//                   ${item.price}
//                 </div>
//                 <div className="avil">
//                   in Stock
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { removeFromWISH_List } from "../../redux/slices/favSlice";
import "./favorite.scss";
import { useDispatch, useSelector } from "react-redux";

export const Favorite = () => {
  const { WISH_LIST_ITEMS } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  console.log(WISH_LIST_ITEMS);

  return (
    <>
      <div className="wishlist">
        <div className="container">
          <h1 className="title">Wishlist</h1>
          <div className="items-wrapper">
            <table className="wish-box-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>STOCK STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {WISH_LIST_ITEMS.map((item) => (
                  <tr key={item.id} className="wish-box">
                    <td className="img-status">
                      <img src={item.image} alt="" />
                      <span>{item.title}</span>
                    </td>
                    <td className="price">${item.price}</td>
                    <td className="avil">in Stock</td>
                    <td className="del">
                      <span
                        onClick={() =>
                          dispatch(removeFromWISH_List({ id: item.id }))
                        }
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
