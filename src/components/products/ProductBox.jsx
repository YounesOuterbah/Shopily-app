import { MdAddShoppingCart } from "react-icons/md";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { addToWISH_List } from "../../redux/slices/favSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductBox = ({ products }) => {
  const [qty, setQty] = useState(1);
  const [likedProducts, setLikedProducts] = useState([]);

  const dispatch = useDispatch();

  const handleHeartClick = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <>
      <ToastContainer />
      {products.map((product) => (
        <div className="product-box" key={product.id}>
          <div className="icon-heart">
            <AiFillHeart
              onClick={() => (
                handleHeartClick(product.id),
                dispatch(
                  addToWISH_List({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                ),
                toast.success("Product successfully added to your wishlist", {
                  type: "dark",
                })
              )}
              className={`icon fav ${likedProducts.includes(product.id) ? "active" : ""}`}
            />
          </div>
          <Link to={`/single-product/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          <div className="text">
            <p>{product.title.slice(0, 22)}</p>
            <div className="rating">
              <AiFillStar className="icon" />
              {product.rating.rate}
            </div>
          </div>
          <span className="line-through"></span>
          <div className="pricing">
            <span>${product.price}</span>
            <div className="cart">
              <MdAddShoppingCart
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      quantity: qty,
                      image: product.image,
                    })
                  );
                  toast.success(`Product successfully added to your shopping cart`);
                }}
                className="icon"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
