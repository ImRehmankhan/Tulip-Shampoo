import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CheckoutPage from "./Pages/CheckoutPage";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923409611631" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      <Footer />
    </Router>
  );
}
