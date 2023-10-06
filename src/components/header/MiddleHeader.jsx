import { FaLeaf } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiTwotoneHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const MiddleHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="middle-header">
      <div className="container">
        <Link to="/" className="logo">
          <FaLeaf className="icon" />
          Shopily
        </Link>
        <div className="search-bar">
          <BsSearch className="icon" />
          <input type="search" placeholder="what are you looking for" />
          <input type="button" value="Search" />
        </div>
        <div className="personal">
          <Link to="/favorite">
            <AiTwotoneHeart className="icon fav" />
          </Link>
          <span>|</span>
          <div className="cart">
            <Link to="/cart">
              <AiOutlineShoppingCart className="icon" />
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Link>
            <div className="cart-details">
              <p className="title">Shopping cart:</p>
              <p>${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
