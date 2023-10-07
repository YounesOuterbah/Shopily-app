import { removeFromWISH_List } from "../../redux/slices/favSlice";
import "./favorite.scss";
import { useDispatch, useSelector } from "react-redux";

export const Favorite = () => {
  const { WISH_LIST_ITEMS } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      <div className="wishlist">
        <div className="container">
          <h1 className="title">Wishlist</h1>
          <div className="items-wrapper">
            {WISH_LIST_ITEMS.length > 0 ? (
              <>
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
                          <span onClick={() => dispatch(removeFromWISH_List({ id: item.id }))}>
                            Delete
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div>
                <p style={{ height: "38px" }}>Currently your wishlist is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
