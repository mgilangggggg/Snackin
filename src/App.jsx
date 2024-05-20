import React from "react";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/404/NotFound";
import About from "./Pages/About";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />

          {/* AUTH */}
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forgot" element={<ForgotPassword />} />

          {/* NAV LINK */}
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
