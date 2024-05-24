import React from "react";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Product from "./Pages/Product";
import About from "./Pages/About";
import OrderDetail from "./Pages/OrderDetail";
import NotFound from "./Pages/404/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Forum from "./Pages/Forum";
// import ByCategory from "./Pages/ByCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME UTAMA */}
          <Route path="/" element={<Main />} />

          {/* AUTH */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* NAV LINK */}
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />

          {/* Filter By Category */}
          {/* <Route path="/by-category" element={<ByCategory />} /> */}

          {/* Forum */}
          <Route path="/forum" element={<Forum />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* ORDER */}
          <Route path="/order-detail" element={<OrderDetail />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
