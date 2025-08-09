// Header.jsx
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
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
              <Link to="/Contact" className="hover:text-pink-600">
                Contact
              </Link>
            </div>
          </nav>
        </div>

        {/* Right icons (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <FaUser className="text-gray-600 cursor-pointer" size={18} />
          <FaShoppingCart className="text-gray-600 cursor-pointer" size={18} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-4">
          <FaShoppingCart className="text-gray-600 cursor-pointer" size={18} />
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
            <Link to="/home" className="hover:text-pink-600">
                Home
              </Link>
              <Link to="/products" className="hover:text-pink-600">
                Products
              </Link>
              <Link to="/Contact" className="hover:text-pink-600">
                Contact
              </Link>
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
  );
}
