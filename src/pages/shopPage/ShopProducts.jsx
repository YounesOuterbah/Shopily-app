import { AiFillStar } from "react-icons/ai";
import { BsSearch,BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ShopProducts = ({ visible, setVisible, filterdProducts }) => {
  return (
    <>
      <div className="shop-box-products">
        {filterdProducts.map((prod) => (
          <div
            className="product-box-shop"
            key={prod.id}
            onMouseEnter={() => setVisible(prod.id)}
            onMouseLeave={() => setVisible(null)}
          >
            <div className="img">
              {visible === prod.id && (
                <div className="overlay">
                  <Link to={`/single-product/${prod.id}`}>
                    <BsSearch />
                  </Link>
                </div>
              )}
              <img src={prod.image} alt={prod.title} />
            </div>
            <div className="info-box">
              <p className="title">{prod.title.slice(0, 21)}</p>
              <div className="details">
                <span>${prod.price}</span>
                <div className="rating">
                  <AiFillStar className="icon" />
                  {prod.rating.rate}
                  <BsFillPersonFill className="icon person"/>
                  {prod.rating.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
