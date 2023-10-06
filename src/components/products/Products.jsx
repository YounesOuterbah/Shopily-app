import { useEffect, useState } from "react";
import "./products.scss";
import { ProductBox } from "./ProductBox";
import { ProductListUL } from "./ProductListUL";
import { Paginition } from "./Paginition";

export const Products = () => {
  const [productPosts, setProductPosts] = useState([]);
  const [toggled, setToggled] = useState("All");
  const [apiControl, setApiControl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchProducts() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products${apiControl}`);
      const data = await res.json();
      setProductPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [apiControl]);

  const PRODUCT_PER_PAGE = 4;
  const PAGES = Math.ceil(productPosts.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const orderdProduct = productPosts.slice(startIndex, finishIndex);

  return (
    <>
      <div className="products">
        <div className="container">
          <h1 className="title">Our Products</h1>
          <ProductListUL
            toggled={toggled}
            setToggled={setToggled}
            setApiControl={setApiControl}
          />
          <div className="product-list-box">
            <ProductBox products={orderdProduct} />
          </div>
          <Paginition
            PAGES={PAGES}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
