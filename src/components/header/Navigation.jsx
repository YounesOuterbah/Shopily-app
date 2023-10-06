import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState();
  return (
    <>
      <div className="navigation">
        <div className="container">
          <AiOutlineMenu className="menu" onClick={() => setToggleMenu(true)} />
          <ul
            className="links"
            style={{ right: `${toggleMenu ? "0" : "-700px"}` }}
          >
            <li className="close" onClick={() => setToggleMenu(false)}>
              X
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
