import { Link } from "react-router-dom";
import "./landing.scss";
import landingImg from "/imgs/Bookshop-bro.svg";
import { BsArrowRight } from "react-icons/bs";

export const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>
              Discover It All on <span>SHOPILY:</span> From Clothing to Jewelry
              and More!
            </h1>
            <p className="desc">
              Shopily is like having your favorite store in your pocket and on
              the internet, just like Amazon. It brings the world of online
              shopping right to your fingertips, making it easier than ever to
              find and purchase the things you love.
            </p>
            <Link to={"/shop"} className="btn-shop">
              Shop Now <BsArrowRight className="icon" />
            </Link>
          </div>
          <img src={landingImg} alt="" />
        </div>
      </div>
    </>
  );
};
