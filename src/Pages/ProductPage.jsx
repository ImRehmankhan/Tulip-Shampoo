import { useState } from "react";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CustomerReviews from "../Components/CustomerReviews";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ProductHero from "../Components/ProductHero";
import ReturnPolicy from "../Components/ReturnPolicy";
import ProductDescription from "../Components/ProductDesc";
import DeliveryInformation from "../Components/DeliveryInfo";
import Products from "../Components/Products";

export default function ProductPage() {


  return (
    <>
      <ProductHero />

    
      <Products/>

      <CustomerReviews />
    </>
  );
}
