import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState();
  return (
    <>
      <div className="navigation">
        <div className="container">
          {toggleMenu && <div className="overlay"></div>}
          <AiOutlineMenu className="menu" onClick={() => setToggleMenu(true)} />
          <ul
            className="links"
            style={{ right: `${toggleMenu ? "0" : "-700px"}` }}
          >
            <li className="close" onClick={() => setToggleMenu(false)}>
              X
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
