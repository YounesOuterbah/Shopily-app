import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shopPage/Shop";
import { Favorite } from "./pages/favorite/Favorite";
import { Cart } from "./pages/cart/Cart";
import { SingleProduct } from "./pages/single-product/SingleProduct";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="cart" element={<Cart />} />
          <Route path="single-product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
