import "./shop.scss";
import { useState, useEffect } from "react";
import { ShopOptions } from "./ShopOptions";
import { ShopProducts } from "./ShopProducts";

export const Shop = () => {
  const [productsDATA, setProductsDATA] = useState([]);
  const [visible, setVisible] = useState(null);
  const [filterItem, setFilterItem] = useState("");
  const [priceSorted, setPriceSorted] = useState("");
  const [sortingOption, setSortingOption] = useState("");

  async function fetchProducts() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProductsDATA(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const filterdProducts = productsDATA.filter((product) =>
    filterItem === "men's clothing"
      ? product.category === "men's clothing"
      : filterItem === "women's clothing"
      ? product.category === "women's clothing"
      : filterItem === "electronics"
      ? product.category === "electronics"
      : filterItem === "jewelery"
      ? product.category === "jewelery"
      : true
  );

  const sortedPrices =
    priceSorted === "Lth"
      ? filterdProducts.sort((a, b) => a.price - b.price)
      : priceSorted === "Htl"
      ? filterdProducts.sort((a, b) => b.price - a.price)
      : filterdProducts;

  
  let sortedProducts = filterdProducts;

  if (sortingOption === "Mp") {
    sortedProducts = sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
  } else if (sortingOption === "Mr") {
    sortedProducts = sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <>
      <div className="shop">
        <div className="container">
          <h1 className="title">Shop</h1>
          <div className="shop-wrapper">
            <ShopOptions
              filterdProducts={filterdProducts}
              setPriceSorted={setPriceSorted}
              setFilterItem={setFilterItem}
              setSortingOption={setSortingOption}
            />
            <ShopProducts
              filterdProducts={sortedPrices}
              visible={visible}
              setVisible={setVisible}
            />
          </div>
        </div>
      </div>
    </>
  );
};
