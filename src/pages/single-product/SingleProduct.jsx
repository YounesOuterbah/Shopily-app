import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";
import "./single-product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWISH_List } from "../../redux/slices/favSlice";
import { Spinner } from "../../components/spinner/Spinner";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [favClicked, setFavClicked] = useState(false);
  const dispatch = useDispatch();

  async function fetchProduct(productID) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (!product) {
    return <Spinner/>;
  }

  return (
    <div className="container">
      <div className="single-product">
        <div className="img">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.title,
                isFluidWidth: true,
                src: product.image,
              },
              largeImage: {
                src: product.image,
                width: 1200,
                height: 1800,
              },
              isHintEnabled: true,
            }}
          />
        </div>
        <div className="product-info">
          <h3 className="title">{product.title}</h3>
          <div className="rating">
            <p>
              <AiFillStar className="icon" /> {product.rating.rate}
            </p>
            <p>{product.rating.count} review</p>
          </div>
          <div className="pricing">
            ${product.price} <del>${(product.price * 1.2).toFixed(2)}</del>
          </div>
          <p className="desc">{product.description}</p>
          <div className="btns">
            <div className="qty">
              <button className="controls" onClick={() => qty != 1 && setQty(qty - 1)}>
                -
              </button>
              <input
                type="number"
                min="1"
                max="99"
                value={qty}
                onChange={(e) => {
                  setQty(+e.target.value);
                }}
              />
              <button className="controls" onClick={() => setQty(qty + 1)}>
                +
              </button>
            </div>
            <div className="buy">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      quantity: qty,
                      image: product.image,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
            <div
              className="fav"
              onClick={() => (
                setFavClicked(!favClicked),
                dispatch(
                  addToWISH_List({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: qty,
                    image: product.image,
                  })
                )
              )}
            >
              {favClicked ? (
                <AiFillHeart className="icon filled" />
              ) : (
                <AiOutlineHeart className="icon empty" />
              )}
            </div>
          </div>
          <div className="category">
            Category: <span>{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
