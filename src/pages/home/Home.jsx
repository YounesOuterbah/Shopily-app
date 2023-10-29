import { Featured } from "../../components/featuerd/Featured";
import { Landing } from "../../components/landing/Landing";
import { NewsLetter } from "../../components/news-letter/NewsLetter";
import { Products } from "../../components/products/Products";

export const Home = () => {
  return (
    <>
      <Landing />
      <Featured />
      <Products />
      <NewsLetter />
    </>
  );
};
