import React from "react";

import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import CategoryProduct from "../Components/CategoryProduct";
import NewProduct from "../Components/NewProduct";
import Forum from "../Components/SellerBuyerForum";
import StoreChoise from "../Components/StoreChoise";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Carousel */}
      <Carousel />
      {/* End Carousel */}

      {/* Category Product */}
      <CategoryProduct />
      {/* End Category Product */}

      {/* New Product */}
      <NewProduct />
      {/* End New Product */}

      {/* Store Choice */}
      <StoreChoise />
      {/* End Store Choice */}

      {/* Seller & Buyer Forum */}
      <Forum />
      {/* End Seller & Buyer Forum */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default HomePage;
