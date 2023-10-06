import "./featured.scss";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsHeadset, BsShieldCheck, BsBoxSeam } from "react-icons/bs";

export const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="container">
          <ul className="featured-list">
            <li>
              <LiaShippingFastSolid className="icon"/>
              <div className="txt">
                <p>Free Shipping</p>
                <span>Free shipping on all your order</span>
              </div>
            </li>
            <li>
              <BsHeadset className="icon"/>
              <div className="txt">
                <p>Customer Support 24/7</p>
                <span>Instant access to Support</span>
              </div>
            </li>
            <li>
              <BsShieldCheck className="icon"/>
              <div className="txt">
                <p>100% Secure Payment</p>
                <span>We ensure your money is save</span>
              </div>
            </li>
            <li>
              <BsBoxSeam className="icon"/>
              <div className="txt">
                <p>Money-Back Guarantee</p>
                <span>30 Days Money-Back Guarantee</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
