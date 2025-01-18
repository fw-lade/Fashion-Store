import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./pages/home/Home.jsx";
import CartPage from "./pages/carts/CartPage.jsx";
import ProductsPage from "./pages/products/ProductsPage.jsx";
import Error404 from "./components/error404/Error404";
import Categories from "./pages/categories/Categories.jsx";
import Men from "./pages/men/Men.jsx";
import Women from "./pages/women/Women.jsx";
import Kids from "./pages/kids/Kids.jsx";
import Shoes from "./pages/shoes/Shoes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";
import BillingPage from "./pages/billing/BillingPage.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<App />}>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
