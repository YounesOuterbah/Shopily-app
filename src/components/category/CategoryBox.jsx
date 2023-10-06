import { CategoryBoxProduct } from "./CategoryBoxProduct";
import "./category-box.scss";
import elctro from "/imgs/elct.png";
import jewly from "/imgs/jewl.png";
import clothM from "/imgs/m-cloth.png";
import clothW from "/imgs/w-cloth.png";

export const CategoryBox = () => {
  return (
    <>
      <div className="category-box">
        <div className="container">
            <h1 className="title">Our Categories</h1>
          <div className="box">
            <CategoryBoxProduct pic={elctro} title="Electronics" />
            <CategoryBoxProduct pic={jewly} title="Jewelry" />
            <CategoryBoxProduct pic={clothM} title="Men's clothing" />
            <CategoryBoxProduct pic={clothW} title="Women's clothing" />
          </div>
        </div>
      </div>
    </>
  );
};
