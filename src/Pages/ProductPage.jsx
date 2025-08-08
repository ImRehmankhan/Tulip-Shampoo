import { useState } from "react";
import Slider from "react-slick";
import { useNavigate ,Link} from "react-router-dom";
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

export default function ProductPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const product = {
    name: "Halal Veda Oil",
    price: 999,
    oldPrice: 2000,
    rating: 4.47,
    reviews: 1960,
    size: "125ml",
    description:
      "Stops hair fall within a week. Grows new hair within 6 weeks. Reverse hard water damages. Safe for babies, men & women. Stops dandruff & eczema flare-up. Stops hair fall linked to hormonal fluctuations from PCOS and postpartum changes & promotes new hair growth. Try Risk Free For 30 Days.",
    details: ["100% Ayurvedic", "100% Halal", "Chemical Free"],
    guarantee:
      "You're 100% covered — if it's not for you, send it back within 30 days for a quick, no-hassle refund.",
    bundles: [
      { title: "1 Oil Bottle", price: 999, oldPrice: 2000 },
      { title: "2 Oil Bottles", price: 1898, oldPrice: 4000, save: "5%" },
      { title: "Oil + Shampoo", price: 1994, oldPrice: 4000, best: true },
      { title: "3 Oil Bottles", price: 2547, oldPrice: 6000, save: "15%" },
      {
        title: "5 Oil Bottles + Free Shipping",
        price: 3996,
        oldPrice: 10000,
        save: "Max",
      },
    ],
    images: [
      "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823",
      "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823",
      "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823",
    ],
    customerReviews: [
      {
        name: "Ayesha",
        date: "05/08/2025",
        text: "I purchased oil and shampoo. Results are amazing. The hype of halal veda products is real.",
      },
      {
        name: "Laiba",
        date: "03/08/2025",
        text: "I have only used it thrice, feels good! 👍",
      },
      {
        name: "Muzzamil",
        date: "31/07/2025",
        text: "Good results in less time",
      },
      { name: "Shiekh", date: "31/07/2025", text: "Best hair oil" },
      { name: "Anonymous", date: "31/07/2025", text: "Besttttt oilllllll" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm  top-0 z-50">
        {/* Top strip */}
        <div className="bg-pink-600 h-14 flex items-center justify-center text-white px-4">
          <p className="font-bold text-sm sm:text-lg tracking-wide animate-pulse text-center">
            🎉 SUPER SALE! |{" "}
            <span className="underline decoration-yellow-400">50% OFF</span> +
            ADDITIONAL DISCOUNT ON BUNDLES 🎁
          </p>
        </div>

        {/* Main header */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left icons */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-pink-700">
              TulipShampoo.PK
            </h1>
          </div>

          {/* Logo */}
          <div>
            <nav className="border-t border-gray-200 hidden sm:block">
              <div className="max-w-7xl mx-auto flex justify-center gap-6 py-2 text-sm font-medium text-gray-700">
                <Link to="/home" className="hover:text-pink-600">
                  Home
                </Link>
                <Link to="/products" className="hover:text-pink-600">
                  Products
                </Link>
                <Link to="/contact" className="hover:text-pink-600">
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          {/* Right icons (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <FaUser className="text-gray-600 cursor-pointer" size={18} />
            <FaShoppingCart
              className="text-gray-600 cursor-pointer"
              size={18}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-4">
            <FaShoppingCart
              className="text-gray-600 cursor-pointer"
              size={18}
            />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Nav Desktop */}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-gray-200 bg-white shadow-md">
            <div className="flex flex-col items-center justify-center  gap-4 px-4 py-4 text-gray-700 text-sm font-medium">
              <a href="#" className="hover:text-pink-600">
                Home
              </a>
              <a href="#" className="hover:text-pink-600">
                Products
              </a>
              <a href="#contact" className="hover:text-pink-600">
                Contact
              </a>
              <button
                onClick={() => navigate("/product/tulip-shampoo")}
                className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105 text-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </header>
      <ProductHero />
      <CustomerReviews />
    </>
  );
}
