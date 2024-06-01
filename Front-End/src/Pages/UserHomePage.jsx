import React from "react";
import UserNavbar from "../Components/UserNavbar";
import Carousel from "../Components/Carousel";
import CategoryProduct from "../Components/CategoryProduct";
import NewProduct from "../Components/NewProduct";
import SellerBuyerForum from "../Components/SellerBuyerForum";
import StoreChoise from "../Components/StoreChoise";
import UserFooter from "../Components/UserFooter";

const UserHomePage = () => {
  return (
    <>
      {/* Navbar */}
      <UserNavbar />
      {/* End Navbar */}

      {/* Carousel */}
      <Carousel />
      {/* End Carousel */}

      {/* Category Product */}
      <CategoryProduct />
      {/* End Category Product */}

      {/* New Peoduct */}
      <NewProduct />
      {/* End New Product */}

      {/* Seller & Buyer Forum */}
      <SellerBuyerForum />
      {/* End Seller & Buyer Forum */}

      {/* Store Choise */}
      <StoreChoise />
      {/* End Store Choise */}

      {/* Footer */}
      <UserFooter />
      {/* End Footer */}
    </>
  );
};

export default UserHomePage;
