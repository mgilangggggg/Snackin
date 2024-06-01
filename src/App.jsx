import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import UserHomePage from "./Pages/UserHomePage";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Forum from "./Pages/Forum";
import DetailProduct from "./Pages/DetailProduct";
import OrderCompltePage from "./Pages/OrderCompletePage";
import OrderDetail from "./Pages/OrderDetail";
import StoreProfile from "./Pages/StoreProfile";
import NotFound from "./Pages/404/NotFound";
<<<<<<< HEAD
import Profile from "./Pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
// import ByCategory from "./Pages/ByCategory";
>>>>>>> a1125f86c3ac5cf049f0ff875016540569053559

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* Navbar */}
          {/* User Home Page */}
          <Route path="/home" element={<UserHomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />
=======
          <Route path="/cart" element={<Cart />} />
>>>>>>> a1125f86c3ac5cf049f0ff875016540569053559

          {/* Content */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/store-profile" element={<StoreProfile />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/order-complete-page" element={<OrderCompltePage />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
          {/* <Route path="/by-category" element={<ByCategory />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
