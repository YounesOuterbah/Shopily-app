import "./cart.scss";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../../redux/slices/cartSlice";

export const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart">
        <div className="container">
          <h1 className="title">Your Cart</h1>
          <div className="cart-holder">
            <div className="cart-wrapper">
              {cartItems.length == 0 ? (
                <div>Your Cart is Empty :(</div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <>
                      <div className="cart-details" key={item.id}>
                        <div className="text-cart-box">
                          <div className="info-box">
                            <div className="pic">
                              <img src={item.image} alt="" />
                            </div>

                            <div className="info">
                              <h4>{item.title}</h4>
                              <p>
                                ${(item.price * item.quantity).toFixed(2)}{" "}
                                <del>
                                  $(
                                  {(item.price * item.quantity * 1.2).toFixed(2)})
                                </del>
                              </p>
                            </div>
                          </div>
                          <div className="add-delete">
                            <div className="delete">
                              <BiSolidTrashAlt
                                className="icon"
                                onClick={() =>
                                  dispatch(
                                    deleteFromCart({
                                      id: item.id,
                                    })
                                  )
                                }
                              />
                            </div>
                            <div className="qty">
                              <button
                                className="controls"
                                onClick={() =>
                                  dispatch(
                                    updateQuantity({
                                      id: item.id,
                                      quantity:
                                        item.quantity != 1
                                          ? item.quantity - 1
                                          : (item.quantity = 0),
                                    })
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                max="99"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="controls"
                                onClick={() =>
                                  dispatch(
                                    updateQuantity({
                                      id: item.id,
                                      quantity: item.quantity + 1,
                                    })
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </>
                  ))}
                </>
              )}
            </div>
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="cart-sum-box">
                <div>
                  Subtotal:{" "}
                  <span>
                    ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <div>
                  Shipping: <span>Free</span>
                </div>
                <hr />

                <div>
                  Total:{" "}
                  <span>
                    ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
                  </span>
                </div>

                <button>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
