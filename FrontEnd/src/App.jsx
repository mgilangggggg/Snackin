import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import halaman
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import UserHomePage from "./Pages/UserHomePage";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import MyProfile from "./Pages/MyProfile";
import MyOrder from "./Pages/MyOrder";
import MyRating from "./Pages/MyRating";
import ProfileSettings from "./Pages/ProfileSettings";
import Forum from "./Pages/Forum";
import DetailProduct from "./Pages/DetailProduct";
import OrderCompletePage from "./Pages/OrderCompletePage";
import OrderDetail from "./Pages/OrderDetail";
import StoreProfile from "./Pages/StoreProfile";
import NotFound from "./Pages/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<HomePage />} />

        {/* Autentikasi */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Navigasi Utama */}
        <Route path="/home" element={<UserHomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/myrating" element={<MyRating />} />
        <Route path="/setting" element={<ProfileSettings />} />

        {/* Konten Tambahan */}
        <Route path="/forum" element={<Forum />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/order-complete-page" element={<OrderCompletePage />} />
        <Route path="/store-profile" element={<StoreProfile />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
