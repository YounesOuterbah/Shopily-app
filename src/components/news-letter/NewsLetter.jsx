import { FaLeaf } from "react-icons/fa";
import "./news-letter.scss";

export const NewsLetter = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news-letter">
          <div className="logo">
            <FaLeaf className="icon" />
            Shopily
          </div>
          <div className="sub">
            <h4>Subcribe our Newsletter</h4>
            <p>Pellentesque eu nibh eget mauris congue mattis matti.</p>
          </div>
          <div className="mail-bar">
            <input type="search" placeholder="your email address" />
            <input type="button" value="Subcribe" />
          </div>
        </div>
      </div>
    </div>
  );
};
