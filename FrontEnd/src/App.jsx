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
import MyProfile from "./Pages/MyProfile";
import MyOrder from "./Pages/MyOrder";
import ProfileSettings from "./Pages/ProfileSettings";
import NotFound from "./Pages/404/NotFound";
import MyRating from "./Pages/MyRating";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myrating" element={<MyRating />} />

          {/* Content */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/store-profile" element={<StoreProfile />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/order-complete-page" element={<OrderCompltePage />} />

          <Route path="/setting" element={<ProfileSettings />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
